import React  from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);


  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      
      
      {pages.map(pageNumber => (
        <button
          
          key={pageNumber}
          onClick={(e) => {
          
            onPageChange(pageNumber)
          }}
          className={currentPage === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
   
    </div>
  );
};

export default Pagination;