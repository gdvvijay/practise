import React from 'react';
import LocationSelector from './LocationSelector';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Cascading Dropdowns</h1>
        <p>Selecting a country should populate the list of cities. But it doesn't...</p>
      </header>
      <main>
        <LocationSelector />
      </main>
    </div>
  );
}

export default App;