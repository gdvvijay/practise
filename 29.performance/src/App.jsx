// src/App.jsx
import { useState, useMemo, useCallback } from "react";

function ExpensiveCalculation(num) {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num;
  }
  return result;
}

function Child({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // ❌ BUG 1: Missing dependency → always returns stale value
  const calc = useMemo(() => ExpensiveCalculation(num), [num]);

  // ❌ BUG 2: Wrong dependency → new function created every render
  const handleClick = useCallback(() => {
    console.log("Button clicked, count is:", count);
  }, []); // extra dep `num` causes unnecessary rerenders

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy useMemo / useCallback Project</h1>
      <h2>Expensive Result: {calc}</h2>
      <button onClick={() => setNum(num + 1)}>Increase Num</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
