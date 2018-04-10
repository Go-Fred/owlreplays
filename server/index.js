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
console.log(TWITCH_CLIENT_ID)

// Multi-process to utilize all CPU cores.
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

  app.get('/videos', function (req, res) {
    superagent
    .get(SERVICE_URL + "/kraken/videos/248664471")
    .set("Client-ID", TWITCH_CLIENT_ID)
    .set("Accept", "application/vnd.twitchtv.v5+json")
    .then(response => {
      let message = JSON.stringify(response.body, null, 4)
      //console.log(response.body)
      console.log(response.body)
      res.json(response.body);
    })
    .catch(err => {
      console.log("API ERROR:\n", err);
      res.end();
    });
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
