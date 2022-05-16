/*
Instructions
We want to create a counter component.
A label that displays the current value, and a button for incrementing the
value.
*/

import React from "react";

export class Exercise7_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { incrementValue: 0 };
  }
  onButtonClick = () => {
    this.setState({ incrementValue: this.state.incrementValue + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Increment</button>
        <label style={{ marginLeft: 5 }}>{this.state.incrementValue}</label>
      </div>
    );
  }
}
