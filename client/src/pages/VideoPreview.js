import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

const twitchIframeBaseURL = 'http://player.twitch.tv/?autoplay=false&video='

export default class VideoPreview extends Component {

  render() {
    const {id, title} = this.props;
    console.log('props', this.props);
      return (
        <div className="Video" >
          <h1>{title}</h1>
          <Row>
            <Col lg= {8} md={12} sm={12} xs={12}>
              <div>
                <iframe
                  width="80%"
                  height="400"
                  frameborder="0"
                  allowFullScreen
                  src={twitchIframeBaseURL + id + "&autoplay=false"}
                />
              </div>
            </Col>
          </Row> 
        </div>
      );
  }
}