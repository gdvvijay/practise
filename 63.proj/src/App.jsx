import React from 'react';
import Tabs from './Tabs';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Buggy Content Tabs</h1>
      </header>
      <main>
        <Tabs />
      </main>
    </div>
  );
}

export default App;