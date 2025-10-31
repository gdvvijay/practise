// src/App.jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // BUG 1: Infinite re-render problem
  useEffect(() => {
    console.log("Component rendered");
    setCount(count + 1);
  }, []);

  // BUG 2: Wrong handler not updating state properly
  const handleAddTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };


  // BUG 3: Key issue + deletion bug
  const handleDelete = (id) => {
  const filterValue=  todos.filter((todo) => todo.id !== id);
    setTodos(filterValue); // state not updating properly
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy React Project</h1>

      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={Math.random()}>
            {todo.text}{" "}
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
