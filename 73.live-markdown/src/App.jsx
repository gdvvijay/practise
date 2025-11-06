import React from 'react';
import MarkdownEditor from './MarkdownEditor';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Markdown Previewer</h1>
        <p>Type Markdown in the editor on the left to see it rendered on the right.</p>
      </header>
      <MarkdownEditor />
    </div>
  );
}

export default App;