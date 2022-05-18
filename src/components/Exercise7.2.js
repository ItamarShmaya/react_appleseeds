/*
Instructions
We want to create a component that contains a box and a button (in the 
same component).
The box will appear or disappear when the button is clicked.
*/

import React from "react";
// import "../styles/ex7.2.css";

export class Exercise7_2 extends React.Component {
  constructor() {
    super();

    this.state = { className: "hidden" };
  }
  onButtonClick = () => {
    this.setState({
      className: this.state.className === "hidden" ? "visible" : "hidden",
    });
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.onButtonClick}>show/hide</button>
        <div className={`box ${this.state.className}`}></div>
      </div>
    );
  }
}
