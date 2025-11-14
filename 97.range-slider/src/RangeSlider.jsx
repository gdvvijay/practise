import React, { useRef } from 'react';
import './RangeSlider.css';
import { useEffect } from 'react';
import { useCallback } from 'react';

function RangeSlider({ minVal, maxVal, value, onChange }) {
  const rangeRef = useRef(null);

    const getPercent = useCallback(
    (val) => Math.round(((val - minVal) / (maxVal - minVal)) * 100),
    [minVal, maxVal]
  );


  useEffect(() => {
    const minPercent = getPercent(value.min);
    const maxPercent = getPercent(value.max);
    
    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`; // The colored bar's width is the difference.
    }
  }, [value, getPercent]);

  const handleMinChange = (e) => {
    // Logic to update the minimum value of the range
    const newMin = parseInt(e.target.value, 10);
    if (newMin <= value.max) {
      onChange({ min: newMin, max: value.max });
    }
  };

  const handleMaxChange = (e) => {
    // Logic to update the maximum value of the range
   const newMax = parseInt(e.target.value, 10);
   if (newMax >= value.min) {
      onChange({ min: value.min, max: newMax });
    }
  };

  // Calculate positions for display (incorrect)
  const rangeWidth = maxVal - minVal;
  const minPos = ((value.min) / rangeWidth) * 100;
  const maxPos = ((value.max) / rangeWidth) * 100;

  return (
    <div className="range-slider-container">
      <input
        type="range"
        min={minVal}
        max={maxVal}
        value={value.min}
        onChange={handleMinChange}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={minVal}
        max={maxVal}
        value={value.max}
        onChange={handleMaxChange}
        className="thumb thumb--right"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={rangeRef} className="slider__range" />
        <div className="slider__left-value" style={{left:`${value.min}%`}}>{value.min}</div>
        <div className="slider__right-value" style={{right:`${100 - value.max}%`}}>{value.max}</div>
      </div>
    </div>
  );
}

export default RangeSlider;