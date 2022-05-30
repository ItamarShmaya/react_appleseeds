import React, { useEffect, useState } from "react";
import axios from "axios";

const Exercise19_2 = () => {
  const [term, setTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToRender, setCountriesToRender] = useState([]);

  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get("https://restcountries.com/v3.1/all");
  //     const filteredCountries = data.map((country) => {
  //       return country.name.common.toLowerCase().indexOf(term) === 0;
  //     })
  //     setCountries(filteredCountries);
  //   };
  //   search();
  // },[term])

  // const renderedCountriesList = countries.map((country) => {
  //   return <li key={country.name.common}>{country.name.common}</li>;
  // });

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
      setCountriesToRender(countries);
    };
    search();
  }, []);

  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().indexOf(term) === 0;
    });
    setCountriesToRender(filteredCountries);
  }, [term]);

  const renderedCountriesList = countriesToRender.map((country) => {
    return <li key={country.name.common}>{country.name.common}</li>;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries"
        onChange={(e) => setTerm(e.target.value)}
      />
      <ul>{renderedCountriesList}</ul>
    </div>
  );
};

export default Exercise19_2;
