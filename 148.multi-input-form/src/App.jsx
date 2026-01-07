import React from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy User Registration</h1>
        <p>Try to fill out the form. The validation and state handling are broken.</p>
      </header>
      <main>
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;