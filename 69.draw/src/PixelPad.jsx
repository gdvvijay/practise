import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import './PixelPad.css';

const GRID_SIZE = 20;

// Function to create an initial empty grid
const createEmptyGrid = () => {
  return Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => '#ffffff')
  );
};

function PixelPad() {
  const [grid, setGrid] = useState(createEmptyGrid);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handlePixelClick = (rowIndex, colIndex) => {
    // This function should change a pixel's color
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = currentColor;
    setGrid(newGrid);
  };

  const handleClear = () => {
    // This should reset the grid to be empty
   
    setGrid(createEmptyGrid);
  };

  return (
    <div className="pixel-pad-container">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {grid.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              className="pixel"
              style={{ backgroundColor: color }}
              onMouseDown={() => setIsMouseDown(true)}
              onMouseUp={()=>setIsMouseDown(false)}
              onMouseMove={()=>{
               isMouseDown &&  handlePixelClick(rowIndex,colIndex)
               
              }}
            />
          ))
        )}
      </div>
      <div className="controls">
        <ColorPicker
          currentColor={currentColor}
          onColorChange={setCurrentColor}
        />
        <button onClick={handleClear} className="clear-button">Clear</button>
      </div>
    </div>
  );
}

export default PixelPad;