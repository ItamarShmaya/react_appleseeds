/*
Instructions:
Create the following Front End Quiz:
Each element has to be a component
You will have the following components:
Quiz, QuizTitle, Q1, Q1Title, Q1Input, Q2, Q2Title, Q2Input
Quiz: The overall container
QuizTitle: Quiz title
Q1: First question 
Q1Input: First questions input
and so on
Think where do the components belong. Who is the father and who are the 
children.
*/

import React from "react";
// import "../styles/ex3.2.css";

export class Exercise3_2 extends React.Component {
  render() {
    return (
      <div className="quiz">
        <QuizTitle />
        <Q1 />
        <Q1Input />
        <Q2 />
        <Q2Input />
      </div>
    );
  }
}

class QuizTitle extends React.Component {
  render() {
    return <h1 className="title">How do you like front end?</h1>;
  }
}

class Q1 extends React.Component {
  render() {
    return (
      <label htmlFor="loveRange" class="q1">
        How much do you like front end?
      </label>
    );
  }
}

class Q1Input extends React.Component {
  render() {
    return <input type="range" id="loveRange"></input>;
  }
}

class Q2 extends React.Component {
  render() {
    return (
      <label htmlFor="favFeature" className="q2">
        What is your favourite front end feature/topic?
      </label>
    );
  }
}

class Q2Input extends React.Component {
  render() {
    return <input type="text" id="favFeature"></input>;
  }
}
