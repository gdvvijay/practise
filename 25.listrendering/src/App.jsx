// src/App.jsx
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice JS" },
  ]);

  const addTodo = () => {
    // ❌ BUG 1: Wrong id → duplicates possible
    const newTodo = { id: crypto.randomUUID(), text: "New Task" };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    // ❌ BUG 2: Mutates state directly
    // const index = todos.findIndex((t) => t.id === id);
    // todos.splice(index, 1);
    setTodos(prev=>{
      return prev.filter((item)=> item.id !== id)
    });
  };

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          // ❌ BUG 3: Using index as key → unstable list rendering
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Todo List Project</h1>
      <TodoList />
    </div>
  );
}

export default App;
