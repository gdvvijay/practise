// src/App.jsx
import { useState } from "react";

function UsernameInput({ username, setUsername }) {
  return (
    <div>
      <h3>Update Username</h3>
      {/* BUG 1: Controlled input broken */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

function Greeting({ username }) {
  // BUG 2: Greeting does not update when username changes
//   const [name] = useState(username);

  return <h3>Hello, {username || "Guest"}!</h3>;
}

function ResetButton({ setUsername }) {
  // BUG 3: Reset logic wrong
  return <button onClick={() => setUsername("")}>Reset</button>;
}

function App() {
  const [username, setUsername] = useState("Guest");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Shared State Project</h1>
      <UsernameInput username={username} setUsername={setUsername} />
      <Greeting username={username} />
      <ResetButton setUsername={setUsername} />
    </div>
  );
}

export default App;
