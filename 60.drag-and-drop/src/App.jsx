import React from 'react';
import Board from './Board';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Buggy Kanban Board</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;