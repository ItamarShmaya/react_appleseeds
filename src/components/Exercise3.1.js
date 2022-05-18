/*
Instructions
We want to create 4 components: Box1, Box2, Box3 and Box4. 
Box1 is the big green box. 
Box 2 is the blue box.
Box 3 is the pink box.
Box4 is the smallest purple box – we use it twice. 
Note that the boxes contain one another. 
Box 1 contains Box2.
Box 2 contains Box3.
Box 3 two Box4 components.
*/

import React from "react";
// import "../styles/ex3.1.css";

class Box1 extends React.Component {
  render() {
    return <div className="box box1"></div>;
  }
}

class Box2 extends React.Component {
  render() {
    return (
      <div className="box box2">
        <Box1 />
        <Box1 />
      </div>
    );
  }
}

class Box3 extends React.Component {
  render() {
    return (
      <div className="box box3">
        <Box2 />
      </div>
    );
  }
}

export class Exercise3_1 extends React.Component {
  render() {
    return (
      <div className="box box4">
        <Box3 />
      </div>
    );
  }
}
