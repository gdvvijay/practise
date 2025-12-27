import React from 'react';
import Spreadsheet from './Spreadsheet';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Mini-Spreadsheet</h1>
        <p>You can edit cells. Try to create a formula by starting with <code>=SUM(...)</code> or <code>=MULT(...)</code>.</p>
        <p>Example: In C1, type <code>=SUM(A1,B1)</code> after putting numbers in A1 and B1.</p>
      </header>
      <main>
        <Spreadsheet rows={10} cols={5} />
      </main>
    </div>
  );
}

export default App;