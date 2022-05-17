/*
Instructions
1. Create a Spinner Component. ( use one of the spinners 
we created in the CSS course )
2. In the App Component, create a timer (with setTimer) 
when the component mounts to the screen.
3. When the timer is still active display a spinner to the 
screen.
4. When the timer is finished remove the spinner from the 
screen.
Extra:
Create 3 different spinners and randomly select one of 
them when the program starts.
*/

import React from "react";
import "../styles/ex9.1.css";

export class Exercise9_1 extends React.Component {
  state = { render: true };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ render: false });
    }, 5000);
  }
  render() {
    return this.state.render && <Spinner spinnerType="spinner3" />;
  }
}

class Spinner extends React.Component {
  render() {
    return <div className={this.props.spinnerType}></div>;
  }
}

Spinner.defaultProps = {
  spinnerType: "spinner1",
};
