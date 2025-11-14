import React, {useState, useMemo} from 'react';
import './UserList.css';

const PAGE_SIZE = 10;

function UserList({ users }) {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState({ key: 'name', order: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  
  // -- Memoized computation for displaying users (contains bugs) --
  const displayedUsers = useMemo(() => {
    let processedUsers = users;
    
    // 1. Filtering (incorrectly applied after sorting)
    processedUsers=processedUsers.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
    
    // 2. Sorting
    processedUsers=processedUsers.sort((a, b) => {
      if (a[sortBy.key] < b[sortBy.key]) return sortBy.order === 'asc' ? -1 : 1;
      return 0;
    });

    // 3. Pagination
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    processedUsers=processedUsers.slice(startIndex, startIndex + PAGE_SIZE);

    return processedUsers;

  }, [users, filter, sortBy, currentPage]);

  const handleSort = (key) => {
    setSortBy(prev=>({ key, order:prev.order === 'desc' ? 'asc' : 'desc' }));
  };
  
  const totalPages = Math.ceil(users.length / PAGE_SIZE);

  return (
    <div className="user-list-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) =>setFilter( e.target.value)}
        />
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th onClick={()=>handleSort('name')}>Name</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('age')}>Age</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;