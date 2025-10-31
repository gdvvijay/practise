// src/App.jsx
import { BrowserRouter, Routes, Route, Link, useParams, Router } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function User() {
  // ❌ BUG 1: Wrong param destructuring
  const { id } = useParams(); 
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    // ❌ BUG 2: Missing <BrowserRouter> wrapper
    <BrowserRouter>
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Router Project</h1>
      <nav>
        {/* ❌ BUG 3: Using <a> tags instead of <Link> */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users/123">User</Link>
      </nav>
     
      {/* ❌ BUG 4: Route path mismatch → "/users/:id" expected but link is "/user/123" */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
