import React from 'react';
import CharacterCounter from './CharacterCounter';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Character Counter</h1>
        <p>Type in the box below. The counter should track your characters, but it's broken.</p>
      </header>
      <main>
        <CharacterCounter maxLength={140} />
      </main>
    </div>
  );
}

export default App;