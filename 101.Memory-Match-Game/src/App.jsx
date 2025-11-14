import React from 'react';
import MemoryGame from './MemoryGame';
import './App.css';

// A simple set of emoji pairs for the cards
const cardSymbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Memory Match Game</h1>
        <p>Click the cards to find matching pairs!</p>
      </header>
      <main>
        <MemoryGame symbols={cardSymbols} />
      </main>
    </div>
  );
}

export default App;