// src/App.jsx
import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
       
    }
    // ❌ BUG 1: Regex is wrong → allows invalid emails
    if (!/^\S+@\S+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    // ❌ BUG 2: Returns nothing → submit always runs
    setErrors(newErrors)
    return Object.keys(newErrors).length !== 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError=validate();

    if(hasError){
      return
    }
    // ❌ BUG 3: Even with errors, submission happens
    alert(`Submitted: ${form.name} - ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buggy Form</h2>

      <div>
        <label>Name:</label>
        {/* ❌ BUG 4: Wrong value binding (uses errors instead of form state) */}
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={form.email} // ❌ BUG 5: Wrong key → always empty
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Form />
    </div>
  );
}

export default App;
