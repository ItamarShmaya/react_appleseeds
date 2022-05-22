import React from "react";

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <h2>{this.props.name}</h2>
        <img alt="avatar" src={this.props.src} />
      </div>
    );
  }
}
