// src/App.jsx
import { createContext, useState, useContext } from "react";

// ❌ BUG 1: Context created but default value missing shape
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("Guest");

  return (
    // ❌ BUG 2: Value not passed as object → consumers can’t access setter
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  );
}

function UserProfile() {
  const { user } = useContext(UserContext); // ❌ BUG 3: Wrong destructure, context returns string
  return <h3>Current User: {user}</h3>;
}

function UserUpdater() {
  const { setUser } = useContext(UserContext); // ❌ BUG 4: setUser undefined
  return (
    <button onClick={() => setUser("Alice")}>
      Switch to Alice
    </button>
  );
}

function App() {
  return (
    <UserProvider>
      <div style={{ padding: "2rem" }}>
        <h1>Buggy Context Project</h1>
        <UserProfile />
        <UserUpdater />
      </div>
    </UserProvider>
  );
}

export default App;
