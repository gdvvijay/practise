import React from 'react';
import PaletteGenerator from './PaletteGenerator';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Color Palette Generator</h1>
        <p>Press the spacebar or click the "Generate" button to create palettes. Click the lock icon to keep a color you like!</p>
      </header>
      <main>
        <PaletteGenerator />
      </main>
    </div>
  );
}

export default App;