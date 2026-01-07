 import React from 'react';
import KanbanBoard from './KanbanBoard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Buggy Advanced Kanban Board</h1>
        <p>Drag tasks to reorder and move them between columns. Use the '+' to add and click tasks to edit.</p>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;