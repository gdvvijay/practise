import React from 'react';
import WeatherWidget from './WeatherWidget';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Weather App</h1>
      </header>
      <main>
        <WeatherWidget />
      </main>
    </div>
  );
}

export default App;