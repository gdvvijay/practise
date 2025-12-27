import React, { useState } from 'react';
import UserProfile from './UserProfile';
import './App.css';

const initialUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  bio: 'A passionate React developer exploring the world of web development.',
};

function App() {
  const [user, setUser] = useState(initialUser);

  const handleUpdateUser = (updatedUser) => {
    // This function is meant to update the main user state
    console.log("Saving user:", updatedUser);
    setUser(updatedUser ? updatedUser : initialUser)
  };

  return (
    <div className="container">
      <header>
        <h1>Buggy User Profile</h1>
        <p>Click "Edit" to change the user's details and find the bugs.</p>
      </header>
      <main>
        <UserProfile user={user} onUpdate={handleUpdateUser} />
      </main>
    </div>
  );
}

export default App;