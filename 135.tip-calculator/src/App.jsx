import React from 'react';
import TipCalculator from './TipCalculator';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Tip Calculator</h1>
      </header>
      <main>
        <TipCalculator />
      </main>
    </div>
  );
}

export default App;