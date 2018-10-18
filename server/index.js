const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const superagent = require("superagent");
const SERVICE_URL = "https://api.twitch.tv";
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
dotenv.load();

const PORT = process.env.PORT || 5000;
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID
const FAKE_TWITCH_CLIENT_ID = process.env.FAKE_TWITCH_CLIENT_ID
const DEFAULT_THUMBNAILS_WIDTH = 800
const DEFAULT_THUMBNAILS_HEIGHT = 450

const OWL_USER_ID = 137512364
const PlayOverwatch_USER_ID = 59980349

// Get videos from Twitch API using superagent

getTwitchId = (championship) => {
 if (!championship){
     return OWL_USER_ID
 } else {
     switch (championship) {
         case "overwatch-league" :
            return OWL_USER_ID;
         case "world-cup" :
            return PlayOverwatch_USER_ID;
        default :
            return OWL_USER_ID;
     }
 }

}

getVideos = (championship) => {
    const twitchId = getTwitchId(championship)
    return request = superagent
        .get(SERVICE_URL + "/helix/videos?user_id=" + twitchId + "&first=100")
        .set("Client-ID", TWITCH_CLIENT_ID)
        .set("Accept", "application/vnd.twitchtv.v5+json")
        .then((res)=>{
            let videos = res.body.data
            return videos
        })
        .catch(err => {
            //console.log(err)
            throw err
        });
}

// Filter out Contenders videos 
filterWorldCupVideos = (videos) => {
    return videos.filter( video => {
        return video.title.includes("World Cup")
    });
}

// Filter out videos that doesn't contain Full Match
filterFullMatchVideos = (videos) => {
    return videos.filter( video => {
        return video.title.includes("Full Match")
    });
}

formatThumbnailUrls = (videos) => {
    for (let video of videos){
        let {thumbnail_url} = video;
        thumbnail_url = thumbnail_url.replace('%{width}',DEFAULT_THUMBNAILS_WIDTH);
        thumbnail_url = thumbnail_url.replace('%{height}',DEFAULT_THUMBNAILS_HEIGHT);
        video.thumbnail_url = thumbnail_url;
    }

    return videos
}

getDaysSinceDate = (date) => {
    console.log(date)
    //Get 1 day in milliseconds
    let one_day=1000*60*60*24;

    let now = new Date()

    // Convert dates to milliseconds
    let date_ms = new Date(date).getTime();

    // Calculate the difference in milliseconds
    let difference_ms = now - date_ms;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
}

addRelativeDate = (videos) => {

    for (let video of videos){
        video.daysSinceDate = getDaysSinceDate(video.created_at)
    }
    return videos
}

//Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });

} else {
    const app = express();

    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '../client/build')));
    app.use(bodyParser.json());

    // Answer API requests.
    app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
    });

    // Catch the API requests for /videos
    app.get('/videos', (req, res, next) => {
        const {championship} = req.query
        //console.log(championship)
        getVideos(championship)
            .then(function(rawVideos) {
                //console.log(rawVideos)
                if(championship === "world-cup") {
                    rawVideos = filterWorldCupVideos(rawVideos)
                }
                let fullMatchVideos = filterFullMatchVideos(rawVideos)
                fullMatchVideos = formatThumbnailUrls(fullMatchVideos)
                fullMatchVideos = addRelativeDate(fullMatchVideos)
                res.json(fullMatchVideos)
            })
            .catch(err => {
                console.log(err.message)
                res.json({ errMessage: err.message });
            })
        }
    );

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
        response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });

    app.listen(PORT, function () {
        console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
        process.on('SIGUSR2', () => { process.exit(0); });
    });
}
