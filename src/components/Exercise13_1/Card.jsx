import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  renderFood = (foods) => {
    return foods.map((food) => {
      return <li key={food}>{food}</li>;
    });
  };
  render() {
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <h3>{this.props.birthday}</h3>
        <ul>Favorite meat: {this.renderFood(this.props.meats)}</ul>
        <ul>Favorite fish: {this.renderFood(this.props.fish)}</ul>
      </div>
    );
  }
}
