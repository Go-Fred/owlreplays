import React, { Component } from 'react';

import Group from "../Group";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        message: null,
        videos: null,
        today: null, 
        yesterday: null,
        thisWeek: null,
        beforeThisWeek: null,
        fetching: true
        };
    }

    filterVideosByDate = (videos, numberOfDays, returnStateKey) => {

        let filteredVideos=[];

        switch (numberOfDays.length) {

        case 0:
            break;

        case 1:
            filteredVideos = videos.filter( video => {
                return video.daysSinceDate === numberOfDays[0]
            }) 
            break;
        
        case 2:
            filteredVideos = videos.filter( video => {
                return (numberOfDays[0] <= video.daysSinceDate && video.daysSinceDate <= numberOfDays[1])
            }) 
            break;

        }    


        if(filteredVideos === undefined || filteredVideos.length === 0){
            return
        }

        this.setState({
            [returnStateKey]: filteredVideos
        });

    }

    componentDidMount() {
        const {championship} = this.props;
        fetch('/videos' + '?championship=' + championship)
        .then(response => {
            if (!response.ok) {
            throw new Error(`status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            //console.log(data)
            this.setState({ 
            videos: data,
            fetching: false
            });
            this.filterVideosByDate(this.state.videos, [0], "today")
            this.filterVideosByDate(this.state.videos, [1], "yesterday")
            this.filterVideosByDate(this.state.videos, [2,7], "thisWeek")
            this.filterVideosByDate(this.state.videos, [8,1000], "beforeThisWeek")

        }).catch(e => {
            this.setState({
            message: `API call failed: ${e}`,
            fetching: false
            });
        })
    }

    render() {
    const {videos, fetching, today, yesterday, thisWeek, beforeThisWeek} = this.state;
    console.log(today, yesterday, thisWeek, beforeThisWeek);
    return (
        <div className="home" >
          {today && <Group videos={today} date="Today" fetching={fetching} {...this.props}></Group>} 
          {yesterday && <Group videos={yesterday} date="Yesterday" fetching={fetching} {...this.props}></Group>}
          {thisWeek && <Group videos={thisWeek} date="This Week" fetching={fetching} {...this.props}></Group>} 
          {beforeThisWeek && <Group videos={beforeThisWeek} date="More than one week ago" fetching={fetching} {...this.props}></Group>} 
        </div>
    );
  }
}

export default Home;
