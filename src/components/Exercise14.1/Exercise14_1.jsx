import React from "react";

export default class Exercise14_1 extends React.Component {
  constructor(props) {
    super(props);

    this.inputField = React.createRef();
  }

  componentDidMount = () => {
    this.inputField.current.focus();
  };

  render() {
    return (
      <div>
        <label htmlFor="input">Input</label>
        <input id="input" type="text" ref={this.inputField}></input>
      </div>
    );
  }
}
