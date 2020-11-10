import React, { Component } from "react";
import "./Site.scss";

export default class Site extends Component {
  state = { showInfo: false };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  hasInfo = () => {
    const { info } = this.props.site;
    return info && info.length && info.filter((item) => item.length).length;
  };
  hasGithub = () => {
    const { github } = this.props.site;
    return github && github.length;
  };
  hasInfoOrGithub = () => {
    return this.hasInfo() || this.hasGithub();
  };
  render() {
    const { name, img, url, info, github } = this.props.site;
    return (
      <div className="card card-body my-1">
        <h6 className="mx-auto">{name}</h6>
        <a className="mx-auto" href={url}>
          <img className="img-thumbnail" width="100rem" src={img} alt={name} />
        </a>
        <div className="site-info">
          {this.hasInfoOrGithub() && (
            <h5>
              info{" "}
              <span onClick={this.handleInfo}>
                <i className="fas fa-caret-square-down" />
              </span>
            </h5>
          )}
          {this.state.showInfo && this.hasInfoOrGithub() && (
            <>
              <ul>
                {info.map((detail, index) => {
                  return (
                    detail && (
                      <li key={index}>
                        <h5>{detail}</h5>
                      </li>
                    )
                  );
                })}
                {this.hasGithub() && (
                  <li>
                    <a href={github} className="ml-auto">
                      Github
                    </a>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    );
  }
}
