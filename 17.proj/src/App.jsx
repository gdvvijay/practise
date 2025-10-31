// src/App.jsx
import { useState, useEffect, createContext, useContext } from "react";

const WidthContext = createContext();

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export function WidthProvider({ children }) {
  const { width, height } = useWindowSize();
  return (
    <WidthContext.Provider value={{ width, height }}>
      {children}
    </WidthContext.Provider>
  );
}

function WindowSizeDisplay() {
  const { width, height } = useContext(WidthContext);
  return <p>Window size: {width} x {height}</p>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const { width } = useContext(WidthContext);

  useEffect(() => {
    console.log("Counter updated because width changed");
  }, [width]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <WidthProvider>
      <div style={{ padding: "2rem" }}>
        <h1>Fixed Custom Hook Project</h1>
        <WindowSizeDisplay />
        <Counter />
      </div>
    </WidthProvider>
  );
}

export default App;
