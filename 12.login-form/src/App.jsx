// src/App.jsx
import { useState } from "react";

function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // BUG 1: Wrong state update overwrites fields
  const handleChange = (e) => {
    setForm(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  // BUG 2: Validation logic broken
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("/@/") && form.password.length < 6) {
      setError("Email must be valid AND password must be at least 6 chars");
      
    } else {
      setError(null);
      setTimeout(()=>alert("Login success!"),0)
      setForm({ email: "", password: "" })
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Login Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ marginTop: "1rem" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
