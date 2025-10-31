// src/App.jsx
import { useState, useEffect } from "react";

// ❌ BUGGY CUSTOM HOOK
function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // ❌ BUG 1: No cleanup → memory leaks if component unmounts
    // ❌ BUG 2: Missing error handling
    // ❌ BUG 3: No loading state
    const abortController = new AbortController();
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json)).catch((error)=>{console.log(error)})

      return () => abortController.abort()
  }, [url]); // ❌ BUG 4: url missing in dependency array

  return data;
}

function Users() {
  const data = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (!data) return <p>Loading...</p>; // ❌ BUG 5: Misleading → doesn’t differentiate between null/error/loading

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Custom Hook Project</h1>
      <Users />
    </div>
  );
}

export default App;
