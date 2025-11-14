import React from 'react';
import MemeGenerator from './MemeGenerator';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Meme Generator</h1>
        <p>Upload an image, add text, and see if you can fix the bugs!</p>
      </header>
      <main>
        <MemeGenerator />
      </main>
    </div>
  );
}

export default App;