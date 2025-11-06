import React from 'react';
import './Mole.css';
 // Download and place this image
 import moleImage from '../src/assets/image.png'

function Mole({ isUp, onWhack }) {
  return (
    <div className="mole-hole">
      <img
        src={moleImage}
        className={`mole ${isUp ? 'up' : ''}`}
        onClick={onWhack}
        alt="Mole"
      />
    </div>
  );
}
// You must download the mole image and place it in the /src folder.
// Image URL: https://i.imgur.com/R3aSA9v.png
// Save it as `mole.png`

export default Mole;