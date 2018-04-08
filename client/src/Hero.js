import React, { Component } from "react";
import Channel from "./Channel.js";

class Hero extends Component {
  renderChannel(sourcesArray, channelName) {
    let channelSources = [];
    sourcesArray.map(source => {
      if (source.channel === channelName) {
        channelSources.push(source);
      }
      return channelSources;
    });
    if (channelSources.length > 0) {
      return (
        <Channel
          name={channelName}
          hero={this.props.name}
          sources={channelSources}
        />
      );
    }
  }

  render() {
    return (
      <div className="Hero">
        <div className="Hero-header">
          <h1>
            {this.props.name}
          </h1>
          <p className="Hero-intro">
            {this.props.intro}
          </p>
        </div>
        {this.renderChannel(this.props.sources, "Youtube")}
        {this.renderChannel(this.props.sources, "Twitch")}
        {this.renderChannel(this.props.sources, "Web")}
      </div>
    );
  }
}

export default Hero;
