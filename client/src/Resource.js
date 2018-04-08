import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Resource extends Component {
  render() {
    const isVideoContent = this.props.type === "video-content";
    if (isVideoContent) {
      return (
        <Col md={3} sm={4} xs={12}>
          <li className={`Content-entry ${this.props.type}`}>
            <a href={this.props.link}>
              {this.props.text}
            </a>
            <div className="Video-preview">
              <iframe
                width="100%"
                frameborder="0"
                allowFullScreen
                src={this.props.preview}
              />
            </div>
          </li>
        </Col>
      );
    }
    if (this.props.type === "twitch-extended-link-content") {
      return (
        <li className={`Content-entry ${this.props.type}`}>
          <a href={this.props.link}>
            {this.props.text}
          </a>
          <div>
            <a href={this.props.link}>live</a> /{" "}
            <a href={this.props.videoLink}>videos</a>
          </div>
          <div className="Content-description">
            <p>
              {this.props.description}
            </p>
          </div>
        </li>
      );
    }
    return (
      <li className={`Content-entry ${this.props.type}`}>
        <a href={this.props.link}>
          {this.props.text}
        </a>
        <div className="Content-description">
          <p>
            {this.props.description}
          </p>
        </div>
      </li>
    );
  }
}

export default Resource;
