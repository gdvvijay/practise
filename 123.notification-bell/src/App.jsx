import React from 'react';
import NotificationBell from './NotificationBell';
import './App.css';

// Mock notifications
const mockNotifications = [
  { id: 1, text: 'You have a new message from Alice.', read: false },
  { id: 2, text: 'Your task "Design Homepage" is due tomorrow.', read: false },
  { id: 3, text: 'Bob liked your comment.', read: true },
];

function App() {
  return (
    <div className="container">
      <nav>
        <div className="logo">My App</div>
        <NotificationBell notifications={mockNotifications} />
      </nav>
      <main>
        <h1>Page Content</h1>
        <p>Click the bell icon to see your notifications.</p>
      </main>
    </div>
  );
}

export default App;