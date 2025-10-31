import React, { useState, useEffect } from 'react';
import './App.css';

// Simulate fetching initial data from an API
const fetchInitialTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Learn React', completed: true },
        { id: 2, text: 'Build a project', completed: false },
      ]);
    }, 500);
  });
};

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch initial to-dos
  useEffect(() => {
    console.log('Fetching initial data...');
    fetchInitialTodos().then((initialTodos) => {
      setTodos(initialTodos);
    });
  },[]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Math.random(),
        text: newTodo,
        completed: false,
      };
      
      setTodos(prev=>[...prev,newTodoItem]);
    
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    // Buggy way to remove an item
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    // Forgetting to update the state
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;