import React, { useEffect } from 'react';
import './Notification.css';

function Notification({ message, type, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Logic to auto-dismiss is missing
      onRemove()
    }, 5000);
    
  }, []);

  return (
    <div className="notification">
      <p>{message}</p>
      <button className="close-btn" onClick={onRemove}>×</button>
    </div>
  );
}

export default Notification;