import React, { useEffect, useState } from "react";
import Axios from "axios";
const Weather = (props) => {
  const { capital } = props;
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState();
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    api_key +
    "&query=" +
    capital;

  useEffect(() => {
    Axios.get(url).then((response) => {
      setWeather(response.data.current);
    });
  }, []);

  if (!weather) {
    return null;
  }
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>temperature: {weather.temperature} celsius</p>
      <img src={weather.weather_icons} alt={capital}></img>
      <div>
        <span>wind: {weather.wind_speed} mph </span>
        <span>direction: {weather.wind_dir}</span>
      </div>
    </div>
  );
};

export default Weather;
