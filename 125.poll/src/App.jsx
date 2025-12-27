 import React from 'react';
import Poll from './Poll';
import './App.css';

// The data for our poll
const pollData = {
  question: 'What is your favorite front-end framework?',
  options: [
    { id: 1, text: 'React', votes: 8 },
    { id: 2, text: 'Vue', votes: 5 },
    { id: 3, text: 'Angular', votes: 3 },
    { id: 4, text: 'Svelte', votes: 2 },
  ],
};

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Voting Poll</h1>
        <p>Cast your vote! But be careful, the voting logic is flawed.</p>
      </header>
      <main>
        <Poll initialData={pollData} />
      </main>
    </div>
  );
}

export default App;