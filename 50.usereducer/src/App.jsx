// src/App.jsx
import { useReducer } from "react";

const initialState = {
  count: 0,
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // ❌ BUG 1: Missing return — reducer doesn’t return new state
      return {...state,count:state.count++};
    case "add_todo":
      // ❌ BUG 2: Mutates array directly
      // state.todos=[...state.todos,action.payload];
      return {...state,todos:[...state.todos,action.payload]};
    case "reset":
      // ❌ BUG 3: Doesn’t reset properly
      return {count:0,todos:[]};
    default:
      console.warn("Unknown action");
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

   const handleAdd = () => {
    const value = document.getElementById("todoInput").value.trim();
    dispatch({ type: "add_todo", payload: value });
    document.getElementById("todoInput").value = "";
  };
  
  return (
    <div>
      <h2>Buggy useReducer Project</h2>

      {/* ❌ BUG 4: Reading wrong property */}
      <p>Count: {state.counter}</p>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <hr />
      <input
        type="text"
        placeholder="New todo"
        id="todoInput"
      />
      <button
        onClick={handleAdd
        }
      >
        Add Todo
      </button>

      <ul>
        {/* ❌ BUG 5: Missing key + might break when todo is empty */}
        {state.todos.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Counter />
    </div>
  );
}
