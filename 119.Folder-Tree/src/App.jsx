import React from 'react';
import FolderTree from './FolderTree';
import './App.css';

// The initial file system structure
const initialTree = {
  id: 'root',
  name: 'Project Root',
  isFolder: true,
  children: [
    {
      id: 'src',
      name: 'src',
      isFolder: true,
      children: [
        { id: 'app.js', name: 'App.js', isFolder: false, children: [] },
      ]
    },
    {
      id: 'package.json',
      name: 'package.json',
      isFolder: false,
      children: []
    }
  ]
};

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Dynamic Folder Tree</h1>
        <p>Try to add new files and folders to the structure.</p>
      </header>
      <main>
        <FolderTree initialData={initialTree} />
      </main>
    </div>
  );
}

export default App;