/*
Instructions
1. We want to create a simple app: a box that slides into the screen 1 sec
after the page loads, and then disappears from the DOM after 4 seconds.
2. We also want to be able to add 3 such boxes with different sizes.
*/

import React from "react";
// import "../styles/ex8.2.css";

export class Exercise8_2 extends React.Component {
  state = { render: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ render: true });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ render: false });
    }, 4000);
  }
  render() {
    if (this.state.render) {
      return (
        <div>
          <Box animation="animateSlide" boxDesign="box1" />
          <Box animation="animateSlide" boxDesign="box3" />
          <Box animation="animateSlide" boxDesign="box2" />
        </div>
      );
    }
  }
}

export class Box extends React.Component {
  render() {
    return (
      <div className={`${this.props.animation} ${this.props.boxDesign}`}></div>
    );
  }
}
