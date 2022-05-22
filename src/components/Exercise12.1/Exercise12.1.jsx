import React from "react";
import axios from "axios";
import ClickButton from "./ClickButton";

export default class Exercise12_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: "", categories: [], searchInput: "", jokeList: [] };
  }

  onRandomButtonClick = async () => {
    const randomJoke = await axios.get(
      "https://api.chucknorris.io/jokes/random"
    );
    this.setState({ joke: randomJoke.data.value });
  };

  getCategories = async () => {
    const categories = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: categories.data });
  };

  getJokeByCat = async (category) => {
    const jokeByCat = await axios.get(
      `https://secure-tundra-08816.herokuapp.com/https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({ joke: jokeByCat.data.value });
  };

  getJokeByQuery = async (query) => {
    const jokeByQuery = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    const jokeList = jokeByQuery.data.result.map((joke) => {
      return joke.value;
    });
    this.setState({ jokeList: jokeList });
  };

  renderJokeList = () => {
    return this.state.jokeList.map((joke, i) => {
      return <li key={`j${i}`}>{joke}</li>;
    });
  };

  componentDidMount = () => {
    this.getCategories();
  };

  renderCategories = () => {
    return this.state.categories.map((cat) => {
      return (
        <ClickButton
          key={cat}
          name={cat}
          onClick={() => {
            this.getJokeByCat(cat);
          }}
        />
      );
    });
  };

  onSearchInputChange = (target) => {
    this.setState(
      () => {
        return { searchInput: target.value };
      },
      () => {
        if (target.value.length >= 3) this.getJokeByQuery(target.value);
      }
    );
  };
  render() {
    return (
      <>
        <ClickButton onClick={this.onRandomButtonClick} name="Random Joke" />
        <div>Categories: {this.renderCategories()}</div>
        <div>
          <div>Must be between 3 - 120</div>
          <label htmlFor="search">Search Jokes</label>
          <input
            type="text"
            id="search"
            value={this.state.searchInput}
            onChange={({ target }) => {
              this.onSearchInputChange(target);
            }}
          />
        </div>
        <div>Joke: {this.state.joke} </div>
        {this.state.searchInput.length >= 3 && (
          <ul>Joke List: {this.renderJokeList()}</ul>
        )}
      </>
    );
  }
}
