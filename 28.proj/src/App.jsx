// src/App.jsx
import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // ❌ BUG 1: Missing dependency array → infinite loop
  useEffect(() => {
    console.log("Count updated:", count);
    const id=setTimeout(()=>{
      setCount(prev=>prev + 1); 
    },1000)// ❌ BUG 2: Directly updating inside effect → runaway updates
    return ()=>clearTimeout(id)
  },[]);

  // ❌ BUG 3: Interval never cleared → memory leak
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick", count);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Timer Count: {count}</h2>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy useEffect Project</h1>
      <Timer />
    </div>
  );
}

export default App;
