import React from 'react';
import ItemList from './ItemList';
import './App.css';

// Our mock dataset with tags
const allItems = [
  { id: 1, name: 'Article 1', tags: ['Tech', 'News'] },
  { id: 2, name: 'Article 2', tags: ['Sports', 'Opinion'] },
  { id: 3, name: 'Product A', tags: ['Tech', 'Gadgets'] },
  { id: 4, name: 'News Story', tags: ['News', 'Politics'] },
  { id: 5, name: 'Sports Highlights', tags: ['Sports', 'Video'] },
  { id: 6, name: 'Gadget Review', tags: ['Tech', 'Review', 'Gadgets'] },
];


function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Tag Filter</h1>
        <p>Click the tags to filter the list of items. The logic is a bit off.</p>
      </header>
      <main>
        <ItemList items={allItems} />
      </main>
    </div>
  );
}

export default App;