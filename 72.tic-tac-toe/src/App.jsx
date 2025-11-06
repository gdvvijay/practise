import React from 'react';
import Game from './Game';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Tic-Tac-Toe</h1>
      </header>
      <Game />
    </div>
  );
}

export default App;