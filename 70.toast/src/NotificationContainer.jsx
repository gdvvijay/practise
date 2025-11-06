import React from 'react';
import Notification from './Notification';
import './NotificationContainer.css';

function NotificationContainer({ notifications, onRemove }) {
  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <Notification
          message={notification.message}
          type={notification.type}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default NotificationContainer;