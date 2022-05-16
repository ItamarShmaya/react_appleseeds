/*
Instructions
We want to create two buttons and one label.
First button will increment the counter.
Second button will decrement the counter
A label that displays the current value.
The counter range can only be from -10 to 10.
If the counter is negative the label will be a red color.
If the counter is positive the label will be a green color.
If the counter is 0 the label will be a black color.
*/

import React from "react";

export class Exercise7_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentValue: 0 };
  }

  onIncButtonClick = () => {
    if (this.state.currentValue < 10)
      this.setState({ currentValue: this.state.currentValue + 1 });
  };
  onDecButtonClick = () => {
    if (this.state.currentValue > -10)
      this.setState({ currentValue: this.state.currentValue - 1 });
  };

  changeColor = () => {
    if (this.state.currentValue > 0) return "green";
    if (this.state.currentValue < 0) return "red";
    else return "black";
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.onDecButtonClick} className="dec">
          Decrement
        </button>
        <label style={{ color: this.changeColor() }}>
          {this.state.currentValue}
        </label>
        <button onClick={this.onIncButtonClick} className="inc">
          Increment
        </button>
      </div>
    );
  }
}
