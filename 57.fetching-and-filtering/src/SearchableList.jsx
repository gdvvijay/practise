import React, { useState, useEffect } from 'react';
import './SearchableList.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function SearchableList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Effect to fetch user data
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        
          setUsers(data);
          setLoading(false);
        
      }).catch(err=>{
        console.log('something went wrong!',err.message)

      })
      
  },[]);

  // Function to handle changes in the search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by name..."
        className="search-input"
        onChange={handleSearch}
      />
      {loading ? <p>Loading...</p> : (
        <ul className="user-list">
          {filteredUsers.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchableList;