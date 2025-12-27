import React from 'react';
import TransferList from './TransferList';
import './App.css';

// Initial data for the transfer list
const initialItems = [
  { id: 1, text: 'Javascript' },
  { id: 2, text: 'Python' },
  { id: 3, text: 'Java' },
  { id: 4, text: 'C++' },
  { id: 5, text: 'Ruby' },
  { id: 6, text: 'Rust' },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Transfer List</h1>
        <p>Select items and use the buttons to move them between the two lists.</p>
      </header>
      <main>
        <TransferList initialItems={initialItems} />
      </main>
    </div>
  );
}

export default App;