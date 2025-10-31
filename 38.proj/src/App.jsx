// src/App.jsx
import { useEffect, useState } from "react";

function Counter({ count, setCount }) {
  // ❌ BUG 1: Local state duplicates parent state → they get out of sync
  // const [localCount, setLocalCount] = useState(0);
  // useEffect(()=>{
  //   setLocalCount(count)
  // },[count])

  return (
    <div>
      <h3>Child Counter: {count}</h3>
      {/* ❌ BUG 2: Only updates local state, not parent */}
      <button onClick={() => setCount(prev=>prev + 1)}>+</button>
      <button onClick={() => setCount(prev=>prev - 1)}>-</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Props/State Project</h1>
      <h2>Parent Counter: {count}</h2>
      {/* ❌ BUG 3: Forgot to pass setCount → child can’t actually sync with parent */}
      <Counter count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
