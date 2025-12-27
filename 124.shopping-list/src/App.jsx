 import React from 'react';
import ShoppingList from './ShoppingList';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Persistent Shopping List</h1>
        <p>Add items to the list. They should be saved even after you refresh the page.</p>
      </header>
      <main>
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;