import React, { useState } from 'react';
import RangeSlider from './RangeSlider';
import './App.css';

function App() {
  const [range, setRange] = useState({ min: 25, max: 75 });

  return (
    <div className="container">
      <header>
        <h1>Buggy Dual Handle Range Slider</h1>
        <p>Try dragging the handles to select a range.</p>
      </header>
      <main className="slider-box">
        <RangeSlider
          minVal={0}
          maxVal={100}
          value={range}
          onChange={setRange}
        />
        <div className="range-display">
          Selected Range: <strong>${range.min}</strong> - <strong>${range.max}</strong>
        </div>
      </main>
    </div>
  );
}

export default App