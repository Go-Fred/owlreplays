import React, { Component } from "react";
import { Col } from "react-bootstrap";

const twitchIframeBaseURL = 'http://player.twitch.tv/?autoplay=false&video='

export default class TwitchCard extends Component {

  render() {
    const {preview} = this.props;
    console.log('yo')
      return (
          <Col md={3} sm={4} xs={12}>
              <img src={preview}></img>
          </Col>
      );
  }
}