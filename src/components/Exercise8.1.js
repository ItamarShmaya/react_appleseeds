/*
Instructions
1. Create an initial state in a component with a key called 
“favoriteColor” and its value some color string.
2. In your JSX create an h1 element that will display your 
favorite color coming from state.
e.g. “My favorite color is blue”
3.In your JSX create an empty div with an id attribute.
4. Just when the component mounts to the screen call the 
appropriate life cycle method that will create a setTimeout 
function that will be invoked after 1 second.
Inside your setTimeout function change the state’s value of
your favoriteColor to some other color.
3. Call the life cycle method that will be invoked when the 
state changes in your component.
Inside this life cycle method select the empty DOM element
and insert the text “The updated favorite color is” and 
attach the new value you get from state.
*/

import React from "react";

export class Exercise8_1 extends React.Component {
  state = { favoriteColor: "red", newFavColorRef: React.createRef() };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { favoriteColor: "green" };
      });
    }, 1000);
  }

  componentDidUpdate() {
    this.state.newFavColorRef.current.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="newFav" ref={this.state.newFavColorRef}></div>
      </div>
    );
  }
}
