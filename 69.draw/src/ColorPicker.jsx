import React from 'react';
import './ColorPicker.css';

const COLORS = ['#000000', '#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];

function ColorPicker({ onColorChange }) {
  return (
    <div className="color-picker">
      {COLORS.map(color => (
        <div
          key={color}
          className="color-swatch"
          style={{ backgroundColor: color }}
          onClick={()=>onColorChange(color)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;