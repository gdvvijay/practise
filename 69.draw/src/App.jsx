import React from 'react';
import PixelPad from './PixelPad';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Buggy Pixel Art Pad</h1>
      <p>Click and drag on the grid to draw. Can you fix all the bugs?</p>
      <PixelPad />
    </div>
  );
}

export default App;