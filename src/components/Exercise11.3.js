import React from "react";

export class Exercise11_3 extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    textArea: "",
    continued: false,
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  onContinue = () => {
    this.setState({ continued: true });
  };

  onBack = () => {
    this.setState({ continued: false });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form>
          {!this.state.continued && (
            <>
              <Input
                id="firstName"
                type="text"
                onChange={this.onInputChange}
                value={this.state.firstName}
              />
              <Input
                id="lastName"
                type="text"
                onChange={this.onInputChange}
                value={this.state.lastName}
              />
              <Input
                id="age"
                type="number"
                onChange={this.onInputChange}
                value={this.state.age}
              />
              <TextArea
                id="textArea"
                onChange={this.onInputChange}
                value={this.state.textArea}
              />
              <button onClick={this.onContinue} type="button">
                Continue
              </button>
            </>
          )}
          {this.state.continued && (
            <>
              <Review
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
                textArea={this.state.textArea}
              />
              <button onClick={this.onBack} type="button">
                Back
              </button>
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <div className="input-group">
        <label htmlFor={this.props.id}>{this.props.id}</label>
        <input
          onChange={this.props.onChange}
          id={this.props.id}
          type={this.props.type}
          value={this.props.value}
        />
      </div>
    );
  }
}

class TextArea extends React.Component {
  render() {
    return (
      <div className="input-group">
        <label htmlFor="textArea">{this.props.id}</label>
        <textarea
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
class Review extends React.Component {
  render() {
    return (
      <>
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Age: {this.props.age}</div>
        <div>Text Area: {this.props.textArea}</div>
      </>
    );
  }
}
