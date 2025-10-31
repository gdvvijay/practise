import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Buggy: Fetches initial data but has a potential issue
  useEffect(() => {
    const initialTodos = [
      { id: 1, text: 'Learn React', completed: true },
      { id: 2, text: 'Build a buggy project', completed: false },
    ];
    setTodos(initialTodos);
    console.log('Fetching initial todos');
  }, []);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Buggy: Does not prevent default form submission behavior
  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Math.random(), // Not a great way to generate IDs, but will work for this example
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  // Buggy: Incorrectly mutates the state
  const toggleTodo = (id) => {
   const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
  };

  // Buggy: Incorrectly updates state based on previous state
  const deleteTodo = (id) => {
    setTodos(prev=>prev.filter(todo => todo.id !== id));
  };


  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        {/* Buggy: The form submission is not handled correctly */}
        <form onSubmit={(e)=>addTodo(e)}>
            <button type="submit">Add</button>
        </form>
      </div>
      <ul className="todo-list">
        {/* Buggy: Missing key prop and incorrect className logic */}
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed && 'completed' || undefined}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;