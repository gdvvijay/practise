import React from 'react';
import CsvConverter from './CsvConverter';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy CSV to Table Converter</h1>
        <p>Upload a CSV file to see it converted into a table. The parsing logic is flawed.</p>
        <small>Only files with comma-separated values are supported.</small>
      </header>
      <main>
        <CsvConverter />
      </main>
    </div>
  );
}

export default App;