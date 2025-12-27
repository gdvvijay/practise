import React from 'react';
import MortgageCalculator from './MortgageCalculator';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Mortgage Calculator</h1>
        <p>Enter your loan details to calculate your monthly payment.</p>
      </header>
      <main>
        <MortgageCalculator />
      </main>
    </div>
  );
}

export default App;