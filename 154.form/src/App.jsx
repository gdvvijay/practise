import React from 'react';
import DynamicForm from './DynamicForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Dynamic Form</h1>
        <p>Try adding, removing, and editing team members. The form state is broken.</p>
      </header>
      <main>
        <DynamicForm />
      </main>
    </div>
  );
}

export default App;