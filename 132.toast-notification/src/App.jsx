 import React, { useState } from 'react';
import NotificationContainer from './NotificationContainer';
import './App.css';

let nextId = 0;

function App() {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (type, message) => {
    const newNotification = { id: nextId++, type, message };
    setNotifications([newNotification]);
  };

  function handleRemove(){
    setNotifications([])
  }
  return (
    <div className="container">
      <header>
        <h1>Buggy Toast Notifications</h1>
        <p>Click the buttons to trigger notifications.</p>
      </header>
      <div className="buttons-panel">
        <button className="btn success" onClick={() => triggerNotification('success', 'Operation was successful!')}>
          Show Success
        </button>
        <button className="btn error" onClick={() => triggerNotification('error', 'An error occurred!')}>
          Show Error
        </button>
        <button className="btn info" onClick={() => triggerNotification('info', 'Here is some information.')}>
          Show Info
        </button>
      </div>

      <NotificationContainer notifications={notifications} onRemove={handleRemove} />
    </div>
  );
}

export default App;