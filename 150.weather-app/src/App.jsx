import React from 'react';
import WeatherApp from './WeatherApp';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Weather App</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;