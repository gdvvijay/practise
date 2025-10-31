// src/App.jsx
import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // ❌ BUG 1: Overwrites state instead of merging
    setForm(prev=>({...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ BUG 2: Wrong email validation
   if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("Invalid email format");
      return;
    }

    // ❌ BUG 3: Password validation missing (should check min length)
    if (form.password.length < 6) {
      console.log("Too short but still accepted");
      return
    }

    // ❌ BUG 4: Error not cleared after valid submission
    setError('')
    console.log("Form submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>Signup Form</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <SignupForm />
    </div>
  );
}

export default App;
