import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div className="search">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          type="text"
          onChange={this.props.onChange}
          value={this.props.searchInput}
        />
      </div>
    );
  }
}
