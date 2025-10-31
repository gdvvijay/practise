// src/App.jsx
import { useState } from "react";

function ChildC({ username }) {
  return <h3>Hi, {username}</h3>;
}

function ChildB({ username }) {
  // ❌ BUG 1: Wrong prop name passed to ChildC
  return (
    <div>
      <p>Child B</p>
      <ChildC username={username} />
    </div>
  );
}

function ChildA({ username }) {
  // ❌ BUG 2: Forgot to pass down prop correctly
  return (
    <div>
      <p>Child A</p>
      <ChildB username={username}/>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Prop Drilling Project</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <ChildA username={username} />
    </div>
  );
}

export default App;
