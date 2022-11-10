export const fetchCountries = async () => {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries");
  const { data } = await res.json();
  return data;
};
