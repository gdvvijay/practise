import React from 'react';
import RecipeFinder from './RecipeFinder';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Recipe Finder</h1>
        <p>Search for a main ingredient (e.g., "chicken", "beef", "tofu") to find recipes.</p>
      </header>
      <main>
        <RecipeFinder />
      </main>
    </div>
  );
}

export default App;