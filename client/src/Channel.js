import React, { Component } from "react";
import Category from "./Category.js";

class Channel extends Component {
  renderCategory = res =>
    res.map(source =>
      <Category
        name={source.category}
        content={source.content}
        type={source.type}
        channel={this.props.name}
      />
    );

  render() {
    return (
      <div className={`Channel ${this.props.name}`}>
        <h2>
          {this.props.name}
        </h2>
        <div className="Categories">
          {this.renderCategory(this.props.sources)}
        </div>
      </div>
    );
  }
}

export default Channel;
