// src/App.jsx
import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // ❌ BUG 1: Overwrites form state instead of updating field
    setForm(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ❌ BUG 2: Validation only checks one field
    if (!form.email) {
      setError("Email is required");
      return;
    }

    // ❌ BUG 3: Weak password check (length not validated)
    if (!form.password || form.password.length < 5) {
      setError("Password is required and password should be greater then 5 character");
      return;
    }

    // ❌ BUG 4: Error never cleared after success
    setError("")
    alert("Form submitted successfully!");
    setForm({ email: "", password: "" })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={(e)=>handleChange(e)}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={(e)=>handleChange(e)}
      />
      <br />
      <button type="submit">Signup</button>
    </form>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Form Validation Project</h1>
      <SignupForm />
    </div>
  );
}

export default App;
