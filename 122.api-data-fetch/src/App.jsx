import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  },[]);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>🌐 Buggy Users List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <b>{user.name}</b> - {user.email}
          </li>
        ))}
      </ul>

      <p>Total Users: {users.length}</p>
    </div>
  );
}
