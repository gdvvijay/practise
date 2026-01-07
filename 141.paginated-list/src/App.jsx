 import React from 'react';
import PaginatedList from './PaginatedList';
import './App.css';

// Create a large mock dataset
const mockData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  text: `Item number ${i + 1}`,
}));

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Paginated List</h1>
        <p>Use the buttons to navigate through the pages of items.</p>
      </header>
      <main>
        <PaginatedList allItems={mockData} itemsPerPage={8} />
      </main>
    </div>
  );
}

export default App;