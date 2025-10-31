// src/App.jsx
import { useState, createContext, useContext } from "react";

// Auth Context
const AuthContext = createContext();

function LoginForm() {
  const { user, login } = useContext(AuthContext); // ❌ BUG 1: Context may be undefined if provider missing
  const [name, setName] = useState("");

  if (user) {
    return <p>Already logged in as {user}</p>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* ❌ BUG 2: onClick not calling login */}
      <button onClick={()=>login(name)}>Login</button>
    </div>
  );
}

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  // ❌ BUG 3: Protected route logic missing → shows even when no user
  return (
    <div>
      <h2>Welcome, {user}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  // ❌ BUG 4: Only passes user, not login/logout
  return (
    <AuthContext.Provider value={{ user,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Auth Project</h1>
      {/* ❌ BUG 5: Forgot to wrap with AuthProvider */}
      <AuthProvider>
      <LoginForm />
      <Dashboard />
      </AuthProvider>
    </div>
  );
}

export default App;
