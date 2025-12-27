import React from 'react';
import Stopwatch from './Stopwatch';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Stopwatch</h1>
        <p>Use the controls to start, stop, and reset the timer.</p>
      </header>
      <main>
        <Stopwatch />
      </main>
    </div>
  );
}

export default App;