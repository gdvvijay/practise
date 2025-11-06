import React, { useState, useEffect, useRef } from 'react'; // Bug 1 Fix: Correct import syntax. Add useRef for Bug 6.
import { mockApiFetch } from './MockApi';
import Pagination from './Pagination';
import './DataTable.css';

function DataTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI State
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  
  // Bug 6 Fix (Part 1): Use a ref to track if the component is mounted to prevent stale state updates.
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true; // Component has mounted.
    
    // Bug 6 Fix (Part 2): Use a local variable to track if the request is current.
    let isCurrent = true;

    setLoading(true);
    const apiParams = {
      page: currentPage,
      limit: 10,
      search: searchTerm,
      sortKey: sortConfig.key,
      sortDirection: sortConfig.direction,
    };

    mockApiFetch(apiParams).then(response => {
      // Bug 6 Fix (Part 3): Only update state if the component is mounted AND this request is the current one.
      if (isMounted.current && isCurrent) {
        setProducts(response.data);
        setTotalPages(response.totalPages);
        setLoading(false);
      }
    });

    // Bug 6 Fix (Part 4): Return a cleanup function.
    // When a new effect runs, this sets the 'isCurrent' flag for the PREVIOUS effect to false.
    return () => {
      isCurrent = false;
      isMounted.current = false; // Mark as unmounted on cleanup.
    };

  // Bug 2 Fix: The dependencies array had separate keys for sortConfig, causing loops on state update.
  // Using a single object `sortConfig` ensures the effect only runs when the object reference itself changes.
  }, [currentPage, searchTerm, sortConfig]);

  const handleSearchChange = (e) => {
    // Bug 3 Fix: Update search term state and reset to page 1 for a new search.
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handleSort = (key) => {
    let direction = 'ascending';
    // If we're sorting the same column, toggle the direction
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
    }
    // Bug 4 Fix (Part 2): Update the sortConfig state.
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to page 1 when sort changes.
  };

  return (
    <div className="data-table-container">
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm} // Make it a controlled component.
          onChange={handleSearchChange}
        />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {/* Bug 4 Fix (Part 1): Wrap handleSort in an arrow function to prevent it from being called on render. */}
            <th onClick={() => handleSort('name')}>Product Name</th>
            <th onClick={() => handleSort('category')}>Category</th>
            <th onClick={() => handleSort('price')}>Price</th>
            <th onClick={() => handleSort('stock')}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default DataTable;