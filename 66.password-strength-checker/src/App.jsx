import React from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Password Strength Checker</h1>
        <p>Enter a password below to see if the meter works correctly.</p>
      </header>
      <PasswordStrengthChecker />
    </div>
  );
}

export default App;