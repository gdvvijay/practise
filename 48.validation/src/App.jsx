// src/App.jsx
import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // ❌ BUG 1: State mutation (breaks controlled behavior)
    // form[name] = value;
    setForm(prev=>({...prev,[name]:value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ BUG 2: Validation runs but doesn’t handle all fields properly
    if(!form.name.length){
      setError('Name field can not be empty')
      return
    }else if (!form.email.includes("@")) {
      setError("Invalid email");
      return
    }else if (form.password.length < 6){
      setError("Password too short");
      return
    }else{
      setError("");
    }
    // ❌ BUG 3: Form data not cleared after submit
    alert("Form submitted!");
    setForm({
    name: "",
    email: "",
    password: "",
  })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buggy Signup Form</h2>

      <div>
        <label>Name:</label>
        {/* ❌ BUG 4: Missing name attribute */}
        <input value={form.name} name="name" onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input name="email" value={form.email} onChange={handleChange} />
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      {/* ❌ BUG 5: Error always visible even when empty */}
      <p style={{ color: "red" }}>{error}</p>

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
