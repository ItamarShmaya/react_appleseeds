/*
Instructions
Create a new react app, and change its title in the tag to be “AppleSeeds 
React App” and the link text in the main page to be “Click Me” instead of 
“Learn React”
*/

import logo from "../logo.svg";
import "../App.css";
import React from "react";

export class Exercise2_1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Me
          </a>
        </header>
      </div>
    );
  }
}
