import React, { useState, useEffect } from 'react';
import './App.css';

// Simulate fetching user data from an API based on a userID
const fetchUserData = (userId) => {
  console.log(`Fetching data for user: ${userId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = {
        1: { name: { first: 'John', last: 'Doe' }, email: 'john.doe@example.com' },
        2: { name: { first: 'Jane', last: 'Smith' }, email: 'jane.smith@example.com' },
      };
      resolve(users[userId]);
    }, 1000);
  });
};

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [loading,setLoading]=useState(true)
  
  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData(userId).then((userData) => {
      setUser(userData);
      setFirstName(userData.name?.first); // Buggy: trying to set first name
      setLoading(false)
    });
  }, [userId]); // Buggy  dependency array

  const handleUpdateName = () => {
    // Buggy: Mutating state directly
    setUser(prev=>({...prev,name:{...prev.name,first:firstName}}));
    // setUser(user);
  };

  const handleUserChange = () => {
    // Switch to user 2
    setUserId(2);
  };

  if(loading){
    return <div>Loading</div>
  }
  
  if(user===null) return
  return (
    <div className="App">
      <div className="profile-card">
        <h1>User Profile</h1>
        <div className="user-info">
          <p><strong>Full Name:</strong> {`${user.name.first} ${user.name.last}`}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Update first name"
          />
          <button onClick={handleUpdateName}>Update Name</button>
        </div>
        <button onClick={handleUserChange}>Load User 2</button>
      </div>
    </div>
  );
}

export default App;