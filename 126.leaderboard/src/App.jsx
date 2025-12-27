import React from 'react';
import Leaderboard from './Leaderboard';
import './App.css';

// Mock data for the leaderboard
const initialScores = [
  { id: 1, name: 'Alice', score: 950 },
  { id: 2, name: 'Bob', score: 1200 },
  { id: 3, name: 'Charlie', score: 700 },
  { id: 4, name: 'Diana', score: 1150 },
  { id: 5, name: 'Ethan', score: 850 },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Leaderboard</h1>
        <p>Click the table headers to sort the scores.</p>
      </header>
      <main>
        <Leaderboard initialScores={initialScores} />
      </main>
    </div>
  );
}

export default App;