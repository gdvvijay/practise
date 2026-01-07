 import React from 'react';
import ItemList from './ItemList';
import './App.css';

const allItems = [
  { id: 1, name: 'Article about React Hooks', tags: ['React', 'JavaScript', 'Web Dev'] },
  { id: 2, name: 'Guide to Python Data Science', tags: ['Python', 'Data Science'] },
  { id: 3, name: 'Introduction to CSS Grid', tags: ['CSS', 'Web Dev'] },
  { id: 4, name: 'Building a REST API with Node.js', tags: ['JavaScript', 'Node.js', 'Backend'] },
  { id: 5, name: 'State Management in Vue', tags: ['Vue', 'JavaScript', 'Web Dev'] },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Tag Filter</h1>
        <p>Click the tags to filter the list of items. But the logic is a bit off.</p>
      </header>
      <main>
        <ItemList items={allItems} />
      </main>
    </div>
  );
}

export default App;