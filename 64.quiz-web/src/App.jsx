import React from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>The Buggy React Quiz</h1>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;