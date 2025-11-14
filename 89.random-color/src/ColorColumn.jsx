import React from 'react';
import './ColorColumn.css';

function ColorColumn({ hex, isLocked, onLock, onCopy, id }) {
  const handleCopy = () => {
    const hexCode = hex;
    onCopy(hexCode)
    // console.log(`Copied ${hexCode} to clipboard!`); // Doesn't actually copy
  };
  
  return (
    <div className="color-column" style={{ backgroundColor: hex, color: 'white' }}>
      <div className="column-info">
        <h2 onClick={handleCopy}>{hex}</h2>
        <button className="lock-btn" onClick={()=>onLock(id)}>
          {isLocked ? '🔒' : '🔓'}
        </button>
      </div>
    </div>
  );
}

export default ColorColumn;