// src/App.jsx
import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext); // ❌ BUG 1: Context default is undefined
  
  return (
    <button
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        marginTop: "1rem",
      }}
      onClick={() => setTheme(prev=>prev == "light" ? "dark" : "light")} // ❌ BUG 2: toggleTheme might be undefined
    >
      Current Theme: {theme}
    </button>
  );
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  
  // ❌ BUG 3: Forgot to pass toggleTheme in provider value
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Context Project</h1>
      {/* ❌ BUG 4: Forgot to wrap with ThemeProvider */}
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
