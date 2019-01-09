import React, { Component } from "react";

export default class Error extends Component {

  render() {
      return (
        <div className="error" >
          <p>¯\_(ツ)_/¯</p><br></br><p>Unable to retrieve videos from Twitch. Please retry in a couple of minutes.</p>
        </div>
      );
  }
}