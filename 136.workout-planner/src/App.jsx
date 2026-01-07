 import React from 'react';
import WorkoutPlanner from './WorkoutPlanner';
import './App.css';

// A mock list of available exercises
const exerciseLibrary = [
  { id: 1, name: 'Push Ups', category: 'Chest' },
  { id: 2, name: 'Squats', category: 'Legs' },
  { id: 3, name: 'Pull Ups', category: 'Back' },
  { id: 4, name: 'Bicep Curls', category: 'Arms' },
  { id: 5, name: 'Plank', category: 'Core' },
  { id: 6, name: 'Lunges', category: 'Legs' },
  { id: 7, name: 'Overhead Press', category: 'Shoulders' },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Workout Planner</h1>
        <p>Select exercises from the list on the left to add them to your workout plan on the right.</p>
      </header>
      <main>
        <WorkoutPlanner library={exerciseLibrary} />
      </main>
    </div>
  );
}

export default App;