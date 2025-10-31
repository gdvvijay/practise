// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {/* ❌ BUG 1: Wrong path in link (extra /) */}
      <Link to="/users">Go to Users</Link>
    </div>
  );
}

function Users() {
  const users = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, i) => (
          // ❌ BUG 2: Wrong route path in Link (missing id param)
          <li key={crypto.randomUUID()}>
            <Link to={`/users/${i + 1}`}>{u}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetail() {
  const { id } = useParams(); // ❌ BUG 3: id will be undefined (wrong route setup)
  return <h3>User Detail for: {id}</h3>;
}

function App() {
  return (
    
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Buggy Router Project</h1>
        <Routes>
          {/* ❌ BUG 4: Missing index route */}
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          {/* ❌ BUG 5: Wrong route name (should match /users/:id) */}
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
