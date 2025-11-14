import React from 'react';
import UserList from './UserList';
import './App.css';

// Mock user data
const mockUsers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${String.fromCharCode(65 + (i % 26))}${i}`, // User A0, User B1, etc.
  email: `user${i + 1}@example.com`,
  age: Math.floor(Math.random() * 40 + 20), // Age between 20 and 60
}));

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy User List</h1>
        <p>Try filtering, sorting, and paginating the list of users.</p>
      </header>
      <main>
        <UserList users={mockUsers} />
      </main>
    </div>
  );
}

export default App;