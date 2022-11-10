import React, { useEffect, useState } from "react";
import { fetchCountries, getWeatherByCountry } from "../api";
import WeatherCard from "./WeatherCard";
import loader from "../images/loader.svg";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState({});

  const handleChange = async (country = "Australia") => {
    const data = await getWeatherByCountry(country);
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
    <div className="flex justify-center mt-36">
      {weather.main ? (
        <div className=" mx-auto flex-col p-4 min-w-[42rem]">
          <select
            onChange={(e) => handleChange(e.target.value)}
            defaultValue="Australia"
            className="border-2 border-gray-100 p-4 focus:outline-none shadow-sm rounded-xl w-full"
          >
            {countries.map(({ country }, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {weather.id && <WeatherCard weather={weather} />}
        </div>
      ) : (
        <img src={loader} className="flex justify-cer" alt="loader" />
      )}
    </div>
  );
};

export default Countries;
