import React from 'react';
import './SearchBar.css';

function SearchBar({ value, onChange, onSearch }) {
    const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    onSearch();
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g., chicken"
        value={value}
        // The `onChange` prop was missing from the input element.
        onChange={onChange}
      />
      {/* The button now submits the form */}
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;