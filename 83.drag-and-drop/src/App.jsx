import React from 'react';
import FileUploader from './FileUploader';
import './App.css';
function App() {
return (
<div className="container">
<header>
<h1>Buggy File Uploader</h1>
<p>Try dragging and dropping files onto the area below.</p>
<p>Only .txt and .pdf files up to 2MB are allowed.</p>
</header>
<main>
<FileUploader />
</main>
</div>
);
}
export default App;