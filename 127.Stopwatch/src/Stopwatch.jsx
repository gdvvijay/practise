import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0); // time in tenths of a second
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    // This effect should handle the timer interval
    let id
    if (isActive) {
      id=setInterval(() => {
        // This update function has a stale closure on the `time` state
        setTime(prev=>prev+ 1); 
      }, 100); // 100ms for tenths of a second
    }
    return ()=>clearInterval(id)
  }, [isActive]);
  
  const handleStartStop = () => {
    setIsActive(prev=>!prev); // Always starts, never stops
  };
  
  const handleReset = () => {
    setIsActive(false);
    // Does not reset the time
    setTime(0)
  };

  const formatTime = () => {
    const seconds = Math.floor(time / 10);
    const tenths = time % 10;
    return `${seconds}.${tenths}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="timer-display">
        {formatTime()}s
      </div>
      <div className="controls">
        <button onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;