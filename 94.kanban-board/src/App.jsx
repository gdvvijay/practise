import React from 'react';
import KanbanBoard from './KanbanBoard';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Kanban Board</h1>
        <p>Try dragging the task cards between the columns.</p>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;