import React from 'react';
import WeightConverter from './WeightConverter';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Weight Converter</h1>
        <p>Enter a value in either box to convert between Pounds and Kilograms.</p>
      </header>
      <main>
        <WeightConverter />
      </main>
    </div>
  );
}

export default App;