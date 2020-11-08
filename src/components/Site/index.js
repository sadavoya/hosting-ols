import React, { Component } from "react";
import "./Site.scss";

export default class Site extends Component {
  render() {
    const { name, img, url, info, github } = this.props.site;
    return (
      <div className="card card-body">
        <a className="mx-auto" href={url}>
          <img className="img-thumbnail" width="100rem" src={img} alt={name} />
        </a>
        <a href={github} className="ml-auto">
          Github
        </a>
      </div>
    );
  }
}
