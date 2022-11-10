import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchCountriesFromAPI();
  }, []);

  return (
    <select onChange={handleChange}>
      {countries.map(({ country }, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default Countries;
