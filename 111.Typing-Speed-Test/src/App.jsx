import React from 'react';
import TypingTest from './TypingTest';
import './App.css';

// A simple paragraph for the typing test
const sampleText = "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. " +
"Typing quickly and accurately is a valuable skill in the modern world of computers and communication.";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Typing Speed Test</h1>
        <p>Type the text in the box below to measure your speed. Press "Start" to begin!</p>
      </header>
      <main>
        <TypingTest text={sampleText} />
      </main>
    </div>
  );
}

export default App;