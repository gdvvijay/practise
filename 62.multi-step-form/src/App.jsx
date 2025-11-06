import React from 'react';
import MultiStepForm from './MultiStepForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Buggy Multi-Step Signup</h1>
      </header>
      <main>
        <MultiStepForm />
      </main>
    </div>
  );
}

export default App;