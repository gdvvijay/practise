// src/App.jsx
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState("asc");

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Keyboard", price: 100 },
    { id: 4, name: "Mouse", price: 50 },
  ];

  // BUG 1: Search fails when input is empty
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // BUG 2: Sorting mutates original array
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    else return b.price - a.price;
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buggy Product List</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setSortOrder("asc")}>Sort Asc</button>
      <button onClick={() => setSortOrder("desc")}>Sort Desc</button>

      <ul>
        {sorted.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
