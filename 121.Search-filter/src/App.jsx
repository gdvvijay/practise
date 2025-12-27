import { useState, useEffect } from "react";

const USERS = [
  { id: 1, name: "Vijay", role: "Frontend" },
  { id: 2, name: "Rahul", role: "Backend" },
  { id: 3, name: "Anita", role: "Frontend" },
  { id: 4, name: "Priya", role: "Designer" },
  { id: 5, name: "Amit", role: "Backend" },
];

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");

  useEffect(() => {
    setUsers(USERS);
  }, []);

  const filteredUsers = users.filter((u) => {
    // if (role !== "all" && u.role !== role) return;
    // if (!u.name.includes(search)) return;
    return (
      (role == "all" ? true : u.role == role) &&
      u.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🔍 Buggy User Search</h2>

      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="all">All</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Designer">Designer</option>
      </select>

      <ul style={{ marginTop: "15px" }}>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>

      <p>Total Results: {filteredUsers.length}</p>
    </div>
  );
}
