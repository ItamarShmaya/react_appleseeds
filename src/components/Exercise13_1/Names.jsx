import React from "react";

export default class Names extends React.Component {
  renderNames = (names) => {
    return names.map((name, i) => {
      return (
        <span key={`name${i}`} style={{ marginRight: "5px" }}>
          {name}
        </span>
      );
    });
  };
  render() {
    return this.renderNames(this.props.names);
  }
}
