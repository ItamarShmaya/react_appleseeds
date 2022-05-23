import React from "react";

export default class Exercise14_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "" };
    this.textAreaRef = React.createRef();
    this.copyButtonRef = React.createRef();
  }

  onInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  onCopyButtonClick = () => {
    this.textAreaRef.current.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText(this.state.inputValue);
  };
  render() {
    return (
      <div>
        <h1>What is the meaning of life?</h1>
        <textarea
          ref={this.textAreaRef}
          onChange={this.onInputChange}
          value={this.state.inputValue}
        />
        <button ref={this.copyButtonRef} onClick={this.onCopyButtonClick}>
          Copy
        </button>
      </div>
    );
  }
}
