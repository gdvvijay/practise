import { useState, useMemo, useCallback, memo } from "react";

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  console.log("Rendering:", todo.text); 
  return (
    <li style={{ marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
      <button style={{ marginLeft: "8px" }} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
});

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAdd = useCallback(() => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  }, [todos,text]);

  const handleToggle = useMemo((id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  },[]);

  const handleDelete = useCallback((id) => {
    setTodos(prev=>prev.filter((t) => t.id !== id));
  }, []);

  const visibleTodos = useMemo(() => {
    return todos.filter((t) =>
      showCompleted ? t.completed : true
    );
  }, [showCompleted,todos]);

  const completedCount = useMemo(() => {
    console.log("Calculating completed count...");
    return todos.filter((t) => t.completed).length;
  }, [showCompleted]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>⚡ Buggy Performance Todo App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          Show Completed Only
        </label>
      </div>

      <ul style={{ marginTop: "15px" }}>
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <p>Total Tasks: {todos.length}</p>
      <p>Completed Tasks: {completedCount}</p>
    </div>
  );
}

export default App;
