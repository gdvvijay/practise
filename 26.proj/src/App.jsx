// src/App.jsx
import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // ❌ BUG 1: Overwrites entire formData instead of updating field
    setFormData(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ❌ BUG 2: Form data logged is stale because of wrong state handling
    console.log("Form Submitted:", formData);
    // ❌ BUG 3: Reset clears object structure
    setFormData({
    name: "",
    email: "",
    password: "",
  });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Form Project</h1>
      <SignupForm />
    </div>
  );
}

export default App;
