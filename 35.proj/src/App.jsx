// src/App.jsx
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice JS" },
    { id: 3, text: "Read Docs" },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;
    // ❌ BUG 1: Direct mutation of state array
    // todos.push(input);
    setTodos((prev)=>([...prev,{id:crypto.randomUUID(),text:input}]));
    setInput("");
  };

  const removeTodo = (index) => {
    // ❌ BUG 2: Using index as key causes wrong item removal UI glitches
    const newTodos = todos.filter((todo, i) => todo.id !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Buggy Todo List</h2>
      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        // ❌ BUG 3: Missing controlled input onChange
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          // ❌ BUG 4: Using index as key
          <li key={todo.id}>
            {todo.text} <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy List Rendering Project</h1>
      <TodoList />
    </div>
  );
}

export default App;
