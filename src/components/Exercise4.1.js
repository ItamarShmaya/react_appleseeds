/*
Instructions
Create a button component.
Render 2x the button component and make the 1st button with the text 
“Important” and bold. Make the 2nd button with the text “Not Important”
*/

import React from "react";

export class Execrise4_1 extends React.Component {
  render() {
    return <button style={this.props.style}>{this.props.text}</button>;
  }
}
