// src/App.jsx
import { useReducer } from "react";

// ❌ BUGGY REDUCER
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // BUG 1: Directly mutating state
      // console.log(state)
      return {...state,count:state.count + 1};

    case "decrement":
      // BUG 2: Returning only partial state (loses other fields)
      return {...state, count: state.count - 1 };

    case "reset":
      // BUG 3: Wrong reset value
      return { count: 0 };

    default:
      // BUG 4: Returning undefined crashes app
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, user: "Guest" });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Reducer Project</h1>
      <Counter />
    </div>
  );
}

export default App;
