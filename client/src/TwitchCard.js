import React, { Component } from "react";
import { Col } from "react-bootstrap";
import {
    Link,
  } from 'react-router-dom'

const twitchIframeBaseURL = 'http://player.twitch.tv/?autoplay=false&video='

export default class TwitchCard extends Component {

  render() {
    const {preview, title, id, updateCurrentVideoTitle, championship} = this.props;
      return (
            <Col lg={2} md={3} sm={4} xs={7} className="card">
                <Link to={championship + '/videos/'+ id} onClick={() => updateCurrentVideoTitle(title)}>
                    <img src={preview}></img>
                    <div className="card-title"><p>{title}</p></div>
                </Link>
            </Col>
      );
  }
}