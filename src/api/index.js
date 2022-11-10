export const fetchCountries = async () => {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries");
  const { data } = await res.json();
  return data;
};

export const getWeatherByCountry = async (country) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  const data = await res.json();
  return data;
};
