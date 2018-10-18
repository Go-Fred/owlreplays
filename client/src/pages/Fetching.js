import React, { Component } from "react";
import gearIcon from "../img/gear.png";

export default class Fetching extends Component {

  render() {
      return (
        <div className="fetching" >
          <img className="gear" src={gearIcon} alt="spiner" /><br></br><p>Retrieving data from Twitch</p>
        </div>
      );
  }
}