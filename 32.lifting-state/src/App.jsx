// src/App.jsx
import { useState } from "react";

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      // ❌ BUG 1: onChange handler missing → input doesn’t update
    />
  );
}

function Results({ query }) {
  const items = ["Apple", "Banana", "Orange", "Grapes"];
  // ❌ BUG 2: Case sensitivity issue → search fails for lowercase
  const filtered = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <ul>
      {/* ❌ BUG 3: Missing key in list items */}
      {filtered.map((item,i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  // ❌ BUG 4: State wrongly placed in child, siblings can’t share
  const [query,setQuery] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy State Lifting Project</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <Results query={query} />
    </div>
  );
}

export default App;
