import React from 'react';
import FileExplorer from './FileExplorer';
import './App.css';

// This is our mock file system data.
const fileSystemData = {
  id: 'root',
  name: 'root',
  isFolder: true,
  children: [
    {
      id: 'public',
      name: 'public',
      isFolder: true,
      children: [
        { id: 'index.html', name: 'index.html', isFolder: false },
        { id: 'favicon.ico', name: 'favicon.ico', isFolder: false },
      ],
    },
    {
      id: 'src',
      name: 'src',
      isFolder: true,
      children: [
        {
          id: 'components',
          name: 'components',
          isFolder: true,
          children: [
            { id: 'FileExplorer.jsx', name: 'FileExplorer.jsx', isFolder: false },
          ],
        },
        { id: 'App.jsx', name: 'App.jsx', isFolder: false },
        { id: 'index.css', name: 'index.css', isFolder: false },
      ],
    },
    { id: 'package.json', name: 'package.json', isFolder: false },
  ],
};

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy File Explorer</h1>
        <p>Try expanding and collapsing the folders to find the bugs.</p>
      </header>
      <FileExplorer data={fileSystemData} />
    </div>
  );
}

export default App