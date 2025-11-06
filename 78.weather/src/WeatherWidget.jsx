import React, { useState, useEffect } from 'react';
import { getWeatherData } from './mockWeatherApi';
import './WeatherWidget.css';

const cities = ['New York', 'London', 'Tokyo', 'Sydney'];

function WeatherWidget() {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    // This effect should fetch weather data
    setLoading(true); // Should be true when starting
    getWeatherData(selectedCity)
      .then(data => {
        setWeatherData({ data });
        setLoading(true);
      })
      .catch(error => {
        setError(error);
      });
  }, [selectedCity]); // Empty dependency array


  if (error) {
    return <div className="weather-widget error">Failed to load weather data.</div>;
  }
  
  if (!weatherData) {
    return <div className="weather-widget loading">Loading...</div>;
  }
  
  const { city, temperature, condition, humidity, wind } = weatherData.data;

  return (
    <div className="weather-widget">
      <div className="city-selector">
        {cities.map(city => (
          <button
            key={city}
            onClick={()=>setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="weather-info">
        <h2>{city}</h2>
        <div className="temperature">{temperature}°C</div>
        <div className="condition">{condition}</div>
        <div className="details">
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;