import React from 'react';
import RichTextEditor from './RichTextEditor';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Rich Text Editor</h1>
        <p>Type in the box below and try to use the toolbar buttons to format the text.</p>
      </header>
      <main>
        <RichTextEditor />
      </main>
    </div>
  );
}

export default App;