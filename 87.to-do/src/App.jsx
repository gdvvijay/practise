import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy To-Do List</h1>
        <p>A simple to-do list where tasks can have subtasks.</p>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;