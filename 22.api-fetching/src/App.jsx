// src/App.jsx
import { useState, useEffect } from "react";

// ❌ BUGGY CUSTOM HOOK
function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // ❌ BUG 1: fetch not aborted if component unmounts
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });

    // ❌ BUG 2: Missing dependency → hook won’t refetch if url changes
  }, [url]);

  return { data, loading, error };
}

function Posts() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // ❌ BUG 3: No null-check → crash if data is null
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Fetch Hook Project</h1>
      <Posts />
    </div>
  );
}

export default App;
