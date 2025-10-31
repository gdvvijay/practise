import { useState, useEffect } from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        marginBottom: "8px",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
      <button
        style={{ marginLeft: "8px" }}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) {
      setTodos(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (text === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos(prev=>[...prev,newTodo]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(prev=>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  };

  const visibleTodos =
    filter === "completed"
      ? todos.filter((t) => t.completed)
      : filter === "pending"
      ? todos.filter((t) => !t.completed)
      : todos;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🐞 Buggy Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul style={{ marginTop: "15px" }}>
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      <p style={{ marginTop: "15px" }}>
        Total tasks: {todos.length}
      </p>
    </div>
  );
}

export default App;
