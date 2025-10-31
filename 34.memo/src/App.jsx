// src/App.jsx
import { useCallback } from "react";
import { useState, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered 👶");
  return <button onClick={onClick}>Click Child</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ❌ BUG 1: Inline function → Child re-renders every time
  const handleClick = useCallback(() => {
    alert("Child clicked!");
  },[])

   const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Performance Project</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        // ❌ BUG 2: Unnecessary re-renders because no memoization on change handler
        onChange={(e) => handleChange(e)}
      />
      <br />
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
