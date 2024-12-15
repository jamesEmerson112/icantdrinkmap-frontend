import React from "react";


interface WeatherBarProps {
  temperature: number;
  weather: string;
  condition: string;
}

const WeatherBar: React.FC<WeatherBarProps> = ({ temperature, weather, condition }) => {
  return (
    <div className="weather-bar">
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weather}</p>
      <p>Condition: {condition}</p>
    </div>
  );
};


export default WeatherBar