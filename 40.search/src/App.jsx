// src/App.jsx
import { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
console.log(results)
  useEffect(() => {
    // ❌ BUG 1: No debounce → fires API on every keystroke instantly
    const debounce=setTimeout(()=>{
    if (query) {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then((res) => res.json())
        // ❌ BUG 2: Old requests overwrite new results (race condition)
        .then(([data]) => setResults(prev=>[...prev,data||'']));
    }else{
      setResults([]);
    }
    // ❌ BUG 3: Missing cleanup → can cause memory leaks
  },500)
  return ()=>clearTimeout(debounce)
}, [query]);
  

  return (
    <div>
      <h2>Buggy Search</h2>
      <input
        type="text"
        value={query}
        placeholder="Search user..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {/* ❌ BUG 4: Missing key in list rendering */}
        {results.map((user) => (
          <li key={user.id || crypto.randomUUID()}>{user?.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Search Project</h1>
      <Search />
    </div>
  );
}

export default App;
