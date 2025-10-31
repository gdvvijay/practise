import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Fixed Suspense Project</h1>

      <Home />

      <Suspense fallback={<p>Loading page...</p>}>
        <About />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
