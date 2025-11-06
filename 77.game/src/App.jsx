import React from 'react';
import WhackAMoleGame from './WhackAMoleGame';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Whack-A-Mole!</h1>
        <p>Click "Start Game" and then whack the moles that appear!</p>
      </header>
      <main>
        <WhackAMoleGame />
      </main>
    </div>
  );
}

export default App;