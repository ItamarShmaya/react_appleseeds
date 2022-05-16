/*
Instructions
Create a card component.
Render 3x the card component and each card will have a different image, 
title, description and links
*/

import React from "react";
import faker from "@faker-js/faker";

export class Exercise4_2 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="imgContainer">
          <img alt="image" src={faker.image.image()} />
        </div>
        <h2 className="title">{this.props.title}</h2>
        <p className="des">{this.props.description}</p>
        <div className="linksContainer">
          <a href="/">{this.props.link1}</a>
          <a href="/">{this.props.link2}</a>
        </div>
      </div>
    );
  }
}
