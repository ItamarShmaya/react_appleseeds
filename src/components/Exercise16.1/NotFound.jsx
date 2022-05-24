import React from "react";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound-container">
        <div className="notfound">{this.props.item} not found</div>
      </div>
    );
  }
}

NotFound.defaultProps = {
  item: "Page",
};
