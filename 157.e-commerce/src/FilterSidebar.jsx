import React from 'react';
import './FilterSidebar.css';
const categories = ['All', 'Electronics', 'Apparel', 'Home Goods', 'Books'];
function FilterSidebar({ onFilterChange ,filtersValue}) {
  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Search by name</label>
        <input
          type="text"
          name="searchTerm"
          placeholder="e.g., Headphones"
          value={filtersValue.searchTerm}
          onChange={e=>onFilterChange(e)}
        />
      </div>
      <div className="filter-group">
        <label>Category</label>
        <select name="category" value={filtersValue.category} onChange={(e) => onFilterChange(e)}>
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </div>
    </aside>
  );
}
export default FilterSidebar;