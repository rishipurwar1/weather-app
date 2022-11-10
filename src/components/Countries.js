import React, { useEffect, useState } from "react";
import { fetchCountries, getWeatherByCountry } from "../api";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [weather, setWeather] = useState({});

  const handleChange = async (country = "India") => {
    const data = await getWeatherByCountry(country);
    setSelectedCountry(country);
    setWeather(data);
  };

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchCountriesFromAPI();
    handleChange();
  }, []);

  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      value={selectedCountry}
    >
      {countries.map(({ country }, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default Countries;
