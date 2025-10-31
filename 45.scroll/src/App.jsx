// src/App.jsx
import { useEffect, useRef, useState } from "react";

function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      // ❌ BUG 1: Overwrites items instead of appending
      .then((data) => setItems(prev=>[...prev,...data]));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
     
       if (entries[0].isIntersecting) {
        // ❌ BUG 2: Increases page too many times (no throttle/debounce)
        setPage(prev=>prev + 1);
      }
     
    });

    // ❌ BUG 3: Attaches before ref is ready
    observer.observe(loaderRef.current);

    // ❌ BUG 4: Missing cleanup → multiple observers pile up
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2>Buggy Infinite Scroll</h2>
      <ul>
        {/* ❌ BUG 5: Missing key prop */}
        {items.map((item) => (
          <li key={crypto.randomUUID()}>{item.title}</li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: "40px", background: "#ddd" }}>
        Loading more...
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <InfiniteList />
    </div>
  );
}

export default App;
