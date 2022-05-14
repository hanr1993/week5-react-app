import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={22} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max">
          {Math.round(props.temp.max)}°
        </span>
        <span className="WeatherForecast-min">
          {Math.round(props.temp.min)}°
        </span>
      </div>
    </div>
  );
}
