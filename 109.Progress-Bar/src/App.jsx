import React from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Animated Progress Bar</h1>
        <p>Click "Start" to see the progress. But... it's broken.</p>
      </header>
      <main>
        <ProgressBar />
      </main>
    </div>
  );
}

export default App;