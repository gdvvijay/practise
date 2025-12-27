import React, {useState} from 'react';
import './Equalizer.css';

// Initial state for the bands
const createInitialLevels = (bands) => {
  return bands.map(band => ({
    label: band,
    level: 50 // Start in the middle
  }));
};

function Equalizer({ bands }) {
  const [levels, setLevels] = useState(createInitialLevels(bands));
  const [preset, setPreset] = useState('Flat');

  const handleSliderChange = (e, index) => {
    // This is meant to update a single band's level
    // levels[index].level = e.target.value;
    setLevels(prev=>prev.map((item,i)=>i == index ? {...item,level:e.target.value} : item))
    setPreset('Custom');
  };

  const handleReset = () => {
    // Logic to reset all sliders to their initial state
    setLevels(createInitialLevels(bands));
  };

  return (
    <div className="equalizer-container">
      <div className="equalizer-display">
        {levels.map((band, index) => (
          <div key={index} className="band-container">
            <input
              type="range"
              min="0"
              max="100"
              className="eq-slider"
              value={levels[index].level}
              onChange={(e)=>handleSliderChange(e,index)}
            />
            <label className="eq-label">{band.label}</label>
          </div>
        ))}
      </div>
      <div className="controls">
        <span>Preset: {preset}</span>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Equalizer;