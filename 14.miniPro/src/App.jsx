// src/App.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // BUG 1: toggleTheme logic incorrect
  const toggleTheme = () => {
     setTheme(prev=>prev == 'light' ? 'dark' : 'light');
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // BUG 2: Wrong class applied
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

function Header() {
  // BUG 3: Using context outside provider will break app if ThemeProvider missing
  const { theme } = useContext(ThemeContext);
  return <h1>Welcome! Theme is {theme}</h1>;
}

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "2rem" }}>
      <Header />
      <ThemedButton />
    </div>
    </ThemeProvider>
  );
}

export default App;
