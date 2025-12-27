import React from 'react';
import DraggableNote from './DraggableNote';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Draggable Note</h1>
        <p>Try clicking and dragging the note. It doesn't quite work right...</p>
      </header>
      <main className="workspace">
        <DraggableNote />
      </main>
    </div>
  );
}

export default App;