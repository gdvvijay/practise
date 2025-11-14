import React from 'react';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Signup Form</h1>
        <p>Try filling out the form to find the validation and submission bugs.</p>
      </header>
      <main>
        <SignupForm />
      </main>
    </div>
  );
}

export default App;