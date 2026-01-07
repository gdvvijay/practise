import React, { useState, useEffect } from 'react';
import { fetchWeather } from './mockWeatherApi';
import './WeatherApp.css';

function WeatherApp() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSearch = (e) => {
    e.preventDefault();
    setStatus('loading');
    fetchWeather(query)
      .then(data => {
        // Data is not being set correctly
        setWeather(data)
      })
      .catch(err => {
        setStatus('error');
      });
  };

  if (!weather) {
    return (
      <div className="weather-container initial">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Enter city name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'error' && <p className="error">City not found or API error!</p>}
      </div>
    );
  }

  return (
    <div className={`weather-container ${weather.condition}`}>
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Enter city name..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <h2>{weather.city}</h2>
      <div className="weather-details">
        <div className="temperature">{weather.temp}°C</div>
        <div className="condition">{weather.condition}</div>
      </div>
    </div>
  );
}

export default WeatherApp;