import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please enter a city"
        onChange={changeCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="WeatherSearch">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} ºC</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity} %</li>
          <li>Wind:{weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
