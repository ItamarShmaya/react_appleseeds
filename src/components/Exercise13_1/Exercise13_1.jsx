import React from "react";
import data from "./data.js";
import Names from "./Names";
import Card from "./Card.jsx";

export default class Exercise13_1 extends React.Component {
  state = { userNames: [], usersBornBefore1990: [] };
  getNames = () => {
    const names = data.map((user) => {
      return user.name;
    });
    this.setState({ userNames: names });
  };

  getUsersBefore1990 = () => {
    const users = data.filter((user) => {
      return +user.birthday.slice(-4) < 1990;
    });
    this.setState({ usersBornBefore1990: users });
  };

  componentDidMount = () => {
    this.getNames();
    this.getUsersBefore1990();
  };

  renderCards = () => {
    return this.state.usersBornBefore1990.map((user, i) => {
      return (
        <Card
          key={`${user.name}${i}`}
          name={user.name}
          birthday={user.birthday}
          meats={user.favoriteFoods.meats}
          fish={user.favoriteFoods.fish}
        />
      );
    });
  };

  render() {
    return (
      <>
        <Names names={this.state.userNames} />
        <div className="card-container">{this.renderCards()}</div>
      </>
    );
  }
}
