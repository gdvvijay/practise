// src/App.jsx
import { useState, useEffect } from "react";

function Users() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // ❌ BUG 1: Missing dependency → only runs once
    fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
      .then((res) => res.json())
      // ❌ BUG 2: Overwrites instead of appending new users
      .then((data) => setUsers(prev=>{
        const allItem=data.map((item)=>{
        return {...item,id:crypto.randomUUID()}
      })
        return [...prev,...allItem]
      })); 
  }, [page]);

  return (
    <div>
      <h2>Buggy Users Pagination</h2>
      <ul>
        {/* ❌ BUG 3: No key prop → React warnings */}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {/* ❌ BUG 4: setPage updates but effect never runs again */}
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Pagination Project</h1>
      <Users />
    </div>
  );
}

export default App;
