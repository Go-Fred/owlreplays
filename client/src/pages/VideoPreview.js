import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

const twitchIframeBaseURL = 'http://player.twitch.tv/?autoplay=false&video='

export default class VideoPreview extends Component {

  render() {
    const {id, title} = this.props;
    console.log('props', this.props);
      return (
        <div className="content">
          <div className="video" >
            <h1>{title}</h1>
                <div className="iframe-container">
                  <iframe
                    width="80%"
                    height="100%"
                    frameborder="0"
                    allowFullScreen
                    src={twitchIframeBaseURL + id + "&autoplay=false"}
                  />
                </div>
          </div>
        </div>
      );
  }
}