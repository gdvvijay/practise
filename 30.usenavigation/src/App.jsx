// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  const navigate = useNavigate();

  const goHome = () => {
    // ❌ BUG 1: Wrong path (missing "/")
    navigate("/home");
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Buggy React Router Project</h1>

        {/* ❌ BUG 2: Link paths missing leading "/" */}
        <nav>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        {/* ❌ BUG 3: Wrong Route path casing */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
