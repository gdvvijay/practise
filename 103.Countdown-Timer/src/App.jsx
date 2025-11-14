import React from 'react';
import Countdown from './Countdown';
import './App.css';

function App() {
  // Set the countdown to end 1 minute from when the app loads.
  const oneMinuteFromNow = new Date(Date.now() + 1 * 60 * 1000);

  return (
    <div className="container">
      <header>
        <h1>Buggy Countdown Timer</h1>
        <p>This timer should count down to a specific time, but it has bugs.</p>
      </header>
      <main>
        <Countdown endTime={oneMinuteFromNow} />
      </main>
    </div>
  );
}

export default App;