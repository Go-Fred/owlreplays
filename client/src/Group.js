import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TwitchCard from "./TwitchCard";

export default class Group extends Component {

  render() {
    const {videos, fetching, date, currentTitle} = this.props;
      return (
        <Row>
            <Col md={12}><h2>{date}</h2></Col>
                {!fetching ?
                videos.map(video => {
                    return <TwitchCard currentTitle={currentTitle} id={video.id} preview={video.thumbnail_url} title={video.title} url={video.url} {...this.props}/>
                }) : null
                }
        </Row>
      );
  }
}