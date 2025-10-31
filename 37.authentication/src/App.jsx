// src/App.jsx
import { useState } from "react";

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error,setError]=useState('')

  const handleChange = (e) => {
    // ❌ BUG 1: Overwrites form instead of merging fields
    setForm(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ❌ BUG 2: No actual validation
    if(!form.username || !form.password){
      setError('username or password should not be empty')
      return
    }
    if (form.username && form.password) {
      onLogin(form.username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p style={{color:'red'}}>{error}</p>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        // ❌ BUG 3: Missing onChange, username can't be typed
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user}</h2>
      {/* ❌ BUG 4: Logout button not wired up */}
      <button onClick={()=>onLogout()}>Logout</button>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

 function logout(){
  setUser(null)
 }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Auth Project</h1>
      {user ? (
        <Dashboard user={user} onLogout={()=>logout()}/>
      ) : (
        <Login onLogin={(username) => setUser(username)} />
      )}
    </div>
  );
}

export default App;
