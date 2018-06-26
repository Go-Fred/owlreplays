import React, { Component } from "react";
import { Col } from "react-bootstrap";

const twitchIframeBaseURL = 'http://player.twitch.tv/?autoplay=false&video='

export default class Preview extends Component {

  render() {
    const {videoId} = this.props;
    console.log('yo')
      return (
          <Col md={3} sm={4} xs={12}>
            <div className="Video-preview">
              <iframe
                width="100%"
                height="200"
                frameborder="0"
                allowFullScreen
                src={twitchIframeBaseURL + videoId + "&autoplay=false"}
              />
            </div>
          </Col>
      );
  }
}