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
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
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
          <h2>Check it out:</h2>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
