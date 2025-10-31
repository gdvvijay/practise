// src/App.jsx
import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  // BUG 1: Missing cleanup → multiple fetches firing on rapid typing
  useEffect(() => {
    if (query.length < 3) return;

    setLoading(true);
    const id=setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        });
    }, 500);
    return ()=> clearTimeout(id)
  }, []);

  // BUG 2: Input not controlled correctly
  const handleChange = (e) => {
    setQuery(e.target.value); // ❌ directly mutating state
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Search Bar</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handleChange}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results &&
          results.map((user) => (
            <li key={Math.random()}>
              {user.name} ({user.email})
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
