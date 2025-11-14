import React from 'react';
import StepProgressBar from './StepProgressBar';
import './App.css';

function App() {
  // The steps can be any array of strings
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  return (
    <div className="container">
      <header>
        <h1>Buggy Step Progress Bar</h1>
        <p>Use the "Next" and "Previous" buttons to navigate the steps.</p>
      </header>
      <main>
        <StepProgressBar steps={steps} />
      </main>
    </div>
  );
}

export default App;