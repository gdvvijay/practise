// src/App.jsx
import { useEffect, useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(todos)
  // ❌ BUG 1: Loads todos incorrectly (runs every render, not just on mount)
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  },[]);

  // ❌ BUG 2: Wrong dependency → causes infinite loop
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input) return;
    // ❌ BUG 3: Direct mutation of state
    // todos.push({ id: Date.now(), text: input });
    setTodos(prev=>([...prev,{id:Date.now(),text:input}]));
    setInput("");
  };

  const deleteTodo = (id) => {
    // ❌ BUG 4: setTodos not updating properly
    setTodos(prev=>prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Buggy Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {/* ❌ BUG 5: Missing key prop */}
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => deleteTodo(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <TodoApp />
    </div>
  );
}

export default App;
