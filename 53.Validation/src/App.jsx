import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    delete errors[name];
  };

  const validate = (e) => {
    const newErrors = {};
    if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 chars";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (form.message.trim() === "") newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate(e);
    if (Object.keys(foundErrors).length === 0) {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
    } else {
      setErrors(foundErrors);
      setSubmitted(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📬 Buggy Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message: </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>

      {submitted && <p style={{ color: "green" }}>Message sent successfully!</p>}
    </div>
  );
}
