import React, { useEffect, useState } from "react";
import axios from "axios";

const Exercise19_1 = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1/");
      setMovie(data);
    };
    getMovie();
  }, []);

  return (
    <div>
      <div>{movie.title}</div>
      <div>{movie.director}</div>
    </div>
  );
};

export default Exercise19_1;
