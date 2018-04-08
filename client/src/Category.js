import React, { Component } from "react";
import Resource from "./Resource.js";

class Category extends Component {
  render() {
    return (
      <div className="Content-wrapper">
        <h3>
          {this.props.name}
        </h3>
        <ul>
          {this.props.content.map(resource =>
            <Resource
              type={this.props.type}
              preview={resource.preview}
              link={resource.link}
              text={resource.text}
              description={resource.description}
              videoLink={resource.videoLink}
              channel={this.props.channel}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Category;
