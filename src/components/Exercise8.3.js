/*
Instructions
1. We want to create a simple app: a box that changes 
color every half a second.
2. Let’s change the box to a circle after 5 color changes.
*/

import React from "react";

export class Exercise8_3 extends React.Component {
  state = {
    i: null,
    colors: ["red", "blue", "green", "yellow", "orange", "pink"],
    borderRadius: "50%",
    timesChanged: null,
  };

  componentDidMount() {
    this.setState({ i: 0, timesChanged: 1 });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          i:
            this.state.i === this.state.colors.length - 1 ? 0 : prevState.i + 1,
          timesChanged: prevState.timesChanged + 1,
          borderRadius:
            this.state.timesChanged % 5 === 0
              ? this.state.borderRadius === "50%"
                ? "0%"
                : "50%"
              : prevState.borderRadius,
        };
      });
    }, 500);
  }

  render() {
    return (
      <div
        style={{
          width: 100 + "px",
          height: 100 + "px",
          backgroundColor: this.state.colors[this.state.i],
          borderRadius: this.state.borderRadius,
        }}
      ></div>
    );
  }
}
