import React, { useEffect } from 'react';
import './Notification.css';

function Notification({ message, type, onRemove }) {

  useEffect(() => {
    // This effect should auto-dismiss the notification
    const timer = setTimeout(() => {
      // onRemove is not being called
      onRemove()
    }, 5000);
    return ()=>clearTimeout(timer)
  }, []); // Empty dependency array means it only runs once

  return (
    <div className="notification">
      <p>{message}</p>
      <button className="close-btn" onClick={onRemove}>×</button>
    </div>
  );
}

export default Notification;