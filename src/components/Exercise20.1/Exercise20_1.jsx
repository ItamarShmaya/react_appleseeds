import React, { useEffect, useState } from "react";
import axios from "axios";

const Exercise20_1 = () => {
  const [isDataDisplayed, setIsDataDisplayed] = useState(false);

  return (
    <>
      <button onClick={() => setIsDataDisplayed(!isDataDisplayed)}>
        {isDataDisplayed ? "Hide data" : "Display data"}
      </button>
      {isDataDisplayed && <FetchData isDataDisplayed={isDataDisplayed} />}
    </>
  );
};

export default Exercise20_1;

const FetchData = ({ isDataDisplayed }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films", {
        signal: controller.signal,
      });
      console.log("object");
      setData(data);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};
