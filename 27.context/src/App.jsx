// src/App.jsx
import { createContext, useState, useContext } from "react";

// ❌ BUG 1: Context created but no default value handling
const UserContext = createContext();

function Child() {
  // ❌ BUG 2: Wrong context hook usage (forgets .Provider wrapping in App)
  const user = useContext(UserContext);
  return <h3>Hello, {user.name}</h3>;
}

function App() {
  const [user, setUser] = useState({ name: "Guest" });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Context Project</h1>
      <UserContext.Provider value={user}>
      {/* ❌ BUG 3: Forgot to wrap children inside Provider */}
      <Child />
      </UserContext.Provider>
      <button onClick={() => setUser({ name: "Anurag" })}>Login</button>
    </div>
  );
}

export default App;
