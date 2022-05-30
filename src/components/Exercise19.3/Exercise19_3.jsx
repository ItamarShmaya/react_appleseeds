import React, { useEffect, useState } from "react";
import axios from "axios";

const Exercise19_3 = () => {
  const [query, setQuery] = useState("hooks");
  const [resultList, setResultList] = useState([]);
  const [error, setError] = useState("");

  const search = async () => {
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResultList(data.hits);
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    search();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    search();
  };

  const renderedList = resultList.map((result) => {
    return (
      <a key={result.objectID} href={result.url}>
        <li>{result.story_title || result.title}</li>
      </a>
    );
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {error ? error.message : <ul>{renderedList}</ul>}
    </div>
  );
};

export default Exercise19_3;
