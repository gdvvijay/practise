import React from 'react';
import InterestCalculator from './InterestCalculator';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Compound Interest Calculator</h1>
        <p>Enter the details below to see how your investment grows. Or at least, that's the plan...</p>
      </header>
      <main>
        <InterestCalculator />
      </main>
    </div>
  );
}

export default App;