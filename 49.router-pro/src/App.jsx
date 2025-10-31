// src/App.jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/users">Go to Users</Link>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  // ❌ BUG 1: Missing dependency array → infinite fetch loop
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  },[]);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((u) => (
        // ❌ BUG 2: Wrong navigation path (missing `/`)
        <div key={u.id}>
          <Link to={`/user/${u.id}`}>{u.name}</Link>
        </div>
      ))}
    </div>
  );
}

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      // ❌ BUG 3: Doesn’t handle missing user or loading state
      .then((data) => setUser(data));
  }, []);

  if(!user) return
  return (
    <div>
      <h2>User Details</h2>
      {/* ❌ BUG 4: Crashes before user loads */}
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "2rem" }}>
        <h1>Buggy React Router App</h1>
        <Routes>
          {/* ❌ BUG 5: Missing wildcard path or element mismatch */}
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
