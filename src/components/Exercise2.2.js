/*
Instructions
Learn first online on how to use string interpolation in React. Then answer 
the questions below.
Create some JSX with the following variables:
1.const data = ["hello", "world"];
the output should be: “Hello World”
notice the spacing!
2.const number1 = 5;
  const number2 = 6;
the output should be: 5 + 6 = 11
3.const string = "I love React!";
the output should be : The string’s length is <display the length of the string>
*/

import React from "react";

export class Exercise2_2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!";
    return (
      <div className="App">
        <h1>{data.join(" ")}</h1>
        <p>
          {number1} + {number2} = {number1 + number2}
        </p>
        <p>
          The string's "{string}" length is {string.length}
        </p>
      </div>
    );
  }
}
