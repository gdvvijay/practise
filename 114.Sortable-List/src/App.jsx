import React from 'react';
import SortableList from './SortableList';
import './App.css';

// The initial set of items to be sorted
const initialItems = [
  { id: 1, text: 'Task 1: Design the UI' },
  { id: 2, text: 'Task 2: Set up the database' },
  { id: 3, text: 'Task 3: Implement API endpoints' },
  { id: 4, text: 'Task 4: Build the frontend' },
  { id: 5, text: 'Task 5: Deploy to production' },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Sortable List</h1>
        <p>Try dragging and dropping the tasks to reorder them.</p>
      </header>
      <main>
        <SortableList initialItems={initialItems} />
      </main>
    </div>
  );
}

export default App;