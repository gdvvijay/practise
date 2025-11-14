import React from 'react';
import './FilterControls.css';

const categories = ['All', 'Electronics', 'Books', 'Apparel'];

function FilterControls({ onFilterChange, onReset }) {
  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={e => onFilterChange('searchTerm', e.target.value)}
      />
      <select onChange={e => onFilterChange('category', e.target.value)}>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <div>
        <label>Max Price: $500</label>
        <input
          type="range"
          min="0"
          max="500"
          defaultValue="500"
          onChange={e => onFilterChange('maxPrice', e.target.value)}
        />
      </div>
      <button onClick={onReset}>Reset Filters</button>
    </div>
  );
}

export default FilterControls;