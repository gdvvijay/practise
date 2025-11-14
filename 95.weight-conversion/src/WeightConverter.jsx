import React, { useState, useEffect } from 'react';
import './WeightConverter.css';

const POUNDS_TO_KG = 0.453592;
const KG_TO_POUNDS = 2.20462;

const initialState = {
  pounds: '',
  kilograms: '',
};

function WeightConverter() {
   const [weights, setWeights] = useState(initialState);




  const handlePoundsChange = (e) => {
    const value=e.target.value;

    if (value === '') {
      setWeights(initialState);
      return;
    }
    
    const lbs=parseFloat(value)

    if(!isNaN(lbs)){
      setWeights({
  pounds: value,
  kilograms: lbs / POUNDS_TO_KG ,
})
    }
  };
  
  const handleKilogramsChange = (e) => {
    const value=e.target.value

   if (value === '') {
      setWeights(initialState);
      return;
    }
    const kg = parseFloat(value);
   if(!isNaN(kg)){
     setWeights({
  pounds: kg * POUNDS_TO_KG,
  kilograms: value ,
})
   }
  };

  const handleReset = () => {
    // This should reset the converters
  };
const pounds=typeof weights.pounds === 'number' ? weights.pounds.toFixed(2) : weights.pounds
const kilograms=typeof weights.kilograms === 'number' ? weights.kilograms.toFixed(2) : weights.kilograms
  return (
    <div className="converter-container">
      <div className="input-group">
        <label>Pounds (lbs)</label>
        <input type="text" value={pounds} onChange={handlePoundsChange} />
      </div>
      
      <div className="equals-sign">=</div>

      <div className="input-group">
        <label>Kilograms (kg)</label>
        <input type="text" value={kilograms} onChange={handleKilogramsChange} />
      </div>

      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
}

export default WeightConverter;