import React, { useState, useEffect } from 'react';
import './NotificationBell.css';

function NotificationBell({ notifications: initialNotifications }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isOpen, setIsOpen] = useState(false); // Incorrect data type
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    // This logic should mark a notification as read
    // const newNotifications = notifications; // State mutation
    // const notification = newNotifications.find(n => n.id === id);
    // if (notification) {
    //   notification.read = false; // Incorrectly sets it to unread
    // }
    if(id == null){
        setNotifications(prev=>prev.map(mapItem=>({...mapItem,read:true})))
        return
    }
    setNotifications(item=> item.map(mapItem=>mapItem.id == id ? {...mapItem,read:true} : mapItem))
  };
  

  useEffect(() => {
    // This is meant to close the dropdown when clicking outside
    const handleClickOutside = (event) => {
        // event.stopPropagation()
      setIsOpen(false)
    };
    
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="notification-bell" >
      <button className="bell-button" onMouseDown={(e)=>{
        e.stopPropagation()
        setIsOpen(prev=>prev == false ? true : false)
        
      }}>
        🔔
        <span className="badge">{unreadCount}</span>
      </button>

      {isOpen && (
        <div className="notifications-dropdown" onMouseDown={(e)=>e.stopPropagation()}>
          <div className="dropdown-header">
            <h3>Notifications</h3>
          </div>
          <div className="dropdown-body" >
            {notifications.filter(item=>item.read == false).map(notification => (
              <div key={notification.id} className="notification-item"  onClick={()=>handleMarkAsRead(notification.id)} >
                <p>{notification.text}</p>
              </div>
            ))}
          </div>
          <div className="dropdown-footer">
            <button onClick={()=>handleMarkAsRead(null)}>Mark all as read</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;