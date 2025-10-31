// src/App.jsx
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // BUG 1: Wrong async handling
  useEffect(() => {
    async function FetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("network error");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    FetchData();
  }, []);

  // BUG 2: Error handling never works
  const fetchAgain = () => {
    fetch("https://jsonplaceholder.typicode.com/invalid-url")
      .then((res) => {
        if (!res.ok) throw new Error("network error");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Fetch Project</h1>

      <button onClick={fetchAgain}>Fetch Again</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
