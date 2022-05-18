/*
Instructions
We want to render 4 checkboxes and make 2 of them checked by default.
*/

import React from "react";

export class Exercise11_2 extends React.Component {
  state = { c1: false, c2: false, c3: true, c4: true };

  onChange = (id) => {
    this.setState((prev) => {
      return { [id]: !prev[id] };
    });
  };

  renderCheckboxes = () => {
    const checkboxes = ["c1", "c2", "c3", "c4"];
    return checkboxes.map((checkbox) => {
      return (
        <CheckBox
          key={checkbox}
          onChange={this.onChange}
          id={checkbox}
          label={checkbox}
          checked={this.state[checkbox]}
        />
      );
    });
  };

  render() {
    return <div>{this.renderCheckboxes()}</div>;
  }
}

class CheckBox extends React.Component {
  onChange = ({ target }) => {
    this.props.onChange(target.id);
  };
  render() {
    return (
      <div className="checkboxGroup">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          onChange={this.onChange}
          id={this.props.id}
          type="checkbox"
          checked={this.props.checked}
        />
      </div>
    );
  }
}
