import React, { Component } from 'react';
import './App.css';

import {
  Link,
} from 'react-router-dom'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      videos: null,
      fetching: true
    };
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
        console.log(data)
        this.setState({
          video: data[2]._id,
          videos: data,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App-container">
        <div className="Home-header" >
          <h1>The OWL Replays</h1>
          <h2>Check it out: </h2>
          <p>{this.state.video}</p>
          <iframe
            src={"http://player.twitch.tv/?video=" + this.state.video + "&autoplay=false"}
            height="300"
            width="400"
            allowFullScreen={ true }>
          </iframe>
        </div>

      </div>
    );
  }
}

export default HomePage;
