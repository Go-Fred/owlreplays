import React, { Component } from 'react';
import { Row } from "react-bootstrap";

import TwitchCard from "../TwitchCard";
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

    filterTodayVideos = (videos) => {

        let fileteredVideos = videos.filter( video => {
        return video.daysSinceDate === 17
        }) 


        if(fileteredVideos === undefined || fileteredVideos.length === 0){
        return
        }

        this.setState({
        today: fileteredVideos
        });

    }

    filterVideosByDate = (videos, numberOfDays, returnStateKey) => {

        let fileteredVideos = videos.filter( video => {
        return video.daysSinceDate === numberOfDays
        }) 


        if(fileteredVideos === undefined || fileteredVideos.length === 0){
        return
        }

        this.setState({
        [returnStateKey]: fileteredVideos
        });

    }

    componentDidMount() {
        fetch('/videos')
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
            //this.filterTodayVideos(this.state.videos);
            this.filterVideosByDate(this.state.videos, 17, "today")
            this.filterVideosByDate(this.state.videos, 56, "yesterday")

        }).catch(e => {
            this.setState({
            message: `API call failed: ${e}`,
            fetching: false
            });
        })
    }

    render() {
    const {videos, fetching, today, yesterday} = this.state;
    return (
        <div className="Home" >
          {today && <Group videos={today} date="Today" fetching={fetching} {...this.props}></Group>} 
          {yesterday && <Group videos={yesterday} date="Yesterday" fetching={fetching} {...this.props}></Group>} 
        </div>
    );
  }
}

export default Home;
