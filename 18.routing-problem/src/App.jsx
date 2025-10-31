// src/App.jsx
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/user/1">Go to User 1</Link>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function User() {
  // BUG 1: useParams used wrong
  const {id} = useParams();
  // console.log(id)
  return <h2>User ID: {id}</h2>;
}

function NotFound() {
  return <h2>404 - Page not found</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "2rem" }}>
        <h1>Buggy Router Project</h1>

        {/* BUG 2: Nav missing */}
        <Routes>
          {/* BUG 3: Wrong element prop usage */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          {/* BUG 4: Catch-all route wrong */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
