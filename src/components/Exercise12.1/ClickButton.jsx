import React from "react";

export default class ClickButton extends React.Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}
