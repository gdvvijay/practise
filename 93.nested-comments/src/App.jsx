import React from 'react';
import CommentSection from './CommentSection';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Nested Comments</h1>
        <p>Try adding comments and replying to them to find the bugs.</p>
      </header>
      <main>
        <CommentSection />
      </main>
    </div>
  );
}

export default App;