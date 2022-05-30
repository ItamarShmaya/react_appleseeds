import React, { useEffect, useState } from "react";
import axios from "axios";
import ClickButton from "../Exercise12.1/ClickButton";

const Exercise19_4_12_1 = () => {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [jokeList, setJokeList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (searchInput.length >= 3) getJokesByQuery(searchInput);
    else setJokeList([]);
  }, [searchInput]);

  const onRandomButtonClick = async () => {
    const randomJoke = await axios.get(
      "https://api.chucknorris.io/jokes/random"
    );
    setJoke(randomJoke.data.value);
  };

  const getJokesByQuery = async (query) => {
    const jokesByQuery = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    const jokeList = jokesByQuery.data.result.map((joke) => {
      return joke.value;
    });
    setJokeList(jokeList);
  };

  const getCategories = async () => {
    const categories = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    setCategories(categories.data);
  };

  const getJokeByCat = async (cat) => {
    const jokeByCat = await axios.get(
      `https://secure-tundra-08816.herokuapp.com/https://api.chucknorris.io/jokes/random?category=${cat}`
    );
    setJoke(jokeByCat.data.value);
  };

  const renderedCategories = categories.map((cat) => {
    return (
      <ClickButton
        key={cat}
        name={cat}
        onClick={() => {
          getJokeByCat(cat);
        }}
      />
    );
  });

  const renderedJokeList = jokeList.map((joke) => {
    return <li key={joke}>{joke}</li>;
  });

  const onSearchInputChange = ({ target }) => {
    setSearchInput(target.value);
  };
  return (
    <>
      <ClickButton onClick={onRandomButtonClick} name="Random Joke" />
      <div>Categories: {renderedCategories}</div>
      <div>
        <div>Must be between 3 - 120</div>
        <label htmlFor="search">Search Jokes</label>
        <input
          type="text"
          id="search"
          value={searchInput}
          onChange={(e) => {
            onSearchInputChange(e);
          }}
        />
      </div>
      <div>Joke: {joke} </div>
      <ul>Joke List: {renderedJokeList}</ul>
    </>
  );
};

export default Exercise19_4_12_1;
