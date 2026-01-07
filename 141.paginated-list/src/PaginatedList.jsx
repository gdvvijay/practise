import React, {useState} from 'react';
import './PaginatedList.css';

function PaginatedList({ allItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1); // Should be 1-based

  // --- Logic for calculating pagination ---
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItems.slice(startIndex,endIndex); // The slicing is missing


  const goToPage = (pageNumber) => {
    // Logic to go to a specific page is missing
    if(pageNumber <= totalPages){
        setCurrentPage(pageNumber + 1)
    }
  };

  const goToNextPage = () => {
    setCurrentPage(prev=>prev + 1);
  };
  
  const goToPrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };
  
  // Create an array of page numbers for the buttons
  const pageNumbers = [...Array(totalPages).keys()];

  return (
    <div className="pagination-container">
      <ul className="item-list">
        {currentItems.map(item => (
          <li key={item.id} className="list-item">
            {item.text}
          </li>
        ))}
      </ul>

      <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Prev</button>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => goToPage(number)}>
            {number}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default PaginatedList;