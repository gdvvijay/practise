import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => {
        // Intent: increment time by 1 every second
        setTime(prev=>prev + 1);
      }, 1000);
    }
    return ()=>clearInterval(intervalId)
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Helper function to format time into MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // Returns formatted string, e.g., "01:05"
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="time-display">
        {formatTime(time)}
      </div>
      <div className="controls">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;