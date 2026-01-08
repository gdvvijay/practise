 import React from 'react';
import TaskBoard from './TaskBoard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Buggy Task Management Board</h1>
        <p>A place to organize your work, if you can get it to work first...</p>
      </header>
      <main>
        <TaskBoard />
      </main>
    </div>
  );
}

export default App;