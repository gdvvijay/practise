import React from 'react';
import PomodoroTimer from './PomodoroTimer';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Pomodoro Timer</h1>
        <p>A tool to help you focus, if you can fix the bugs first!</p>
      </header>
      <main>
        <PomodoroTimer />
      </main>
    </div>
  );
}

export default App;