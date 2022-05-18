/*
Instructions
We have a parent component, that renders three CustomButton components 
which are simple buttons. Each time the user presses on one the buttons, the 
parent should show which color in the button was selected.
We have an array of colors:
const colors = [“blue”,”red”,”yellow”];
1. Create a CustomButton component.
2. Loop over the colors array and in every iteration render a CustomButton 
component that will take the color as a prop.
3. When we click on a specific button we need to send that specific color back
to the parent which will save that color to state and display it to the DOM.
*/

import React from "react";

export class Exercise11_1 extends React.Component {
  state = { selectedColor: "" };
  onButtonClick = (color) => {
    this.setState({ selectedColor: color });
  };

  renderButtons = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map((color, i) => {
      return (
        <CustomButton
          key={color}
          onButtonClick={this.onButtonClick}
          color={color}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.renderButtons()}
        <div>The Color Selected: {this.state.selectedColor}</div>
      </div>
    );
  }
}

class CustomButton extends React.Component {
  state = { color: this.props.color };
  onButtonClick = () => {
    this.props.onButtonClick(this.state.color);
  };
  render() {
    return (
      <button
        onClick={this.onButtonClick}
        style={{ backgroundColor: this.state.color }}
      >
        {this.state.color}
      </button>
    );
  }
}
