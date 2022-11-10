import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="relative block rounded-xl border-2 border-gray-100 p-8 shadow-sm w-full mt-10">
      <div className="flex justify-between items-center">
        <span className="rounded-full bg-green-100 px-3 py-1.5 text-3xl font-medium text-green-600">
          {weather.main.temp.toFixed(2)} °C
        </span>
        <p className="mt-2 text-3xl font-bold text-gray-900">{weather.name}</p>
      </div>
      <div className="mt-4 text-gray-500 flex justify-between">
        <p className="mt-2 text-xl font-bold text-gray-900">
          <span className="font-normal">Humidity: </span>
          {weather.main.humidity}
        </p>
        <p className="mt-2 text-xl font-bold text-gray-900">
          <span className="font-normal">Speed: </span>
          {weather.wind.speed}
        </p>
        <p className="mt-2 text-xl font-bold text-gray-900">
          <span className="font-normal">Degree: </span>
          {weather.wind.deg}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
