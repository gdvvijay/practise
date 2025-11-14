import React from 'react';
import JobBoard from './JobBoard';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Job Board</h1>
        <p>Use the filters to find the right job. But be careful, the filters are broken!</p>
      </header>
      <main>
        <JobBoard />
      </main>
    </div>
  );
}

export default App;