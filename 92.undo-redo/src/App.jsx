import React from 'react';
import TextEditor from './TextEditor';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Text Editor with Undo/Redo</h1>
        <p>Type in the box and use the buttons to test the undo/redo functionality.</p>
      </header>
      <main>
        <TextEditor />
      </main>
    </div>
  );
}

export default App;