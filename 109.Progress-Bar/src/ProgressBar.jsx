import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

function ProgressBar() {
  const [progress, setProgress] = useState(0); // Should start at 0
  const [isActive, setIsActive] = useState(false);
    
  useEffect(() => {
    // This effect should animate the progress
    if(!isActive) return
    
    if (isActive) {
     let intervalId= setInterval(() => {
        // This has a stale closure on the `progress` state
        setProgress(prev=>{
           
                if(prev > 100){
                    clearInterval(intervalId)
                    setIsActive(false)
                    return 100
                }else{
                    return prev += 1
                }
                
            
        }); 
          return () => clearInterval(intervalId);
      }, 50);
      
    }
    
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };
  
  const handleReset = () => {
    setProgress(0)
    setIsActive(false);
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div 
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
        <span className="progress-label">{progress}%</span>
      </div>
      <div className="controls">
        <button onClick={handleStart} disabled={isActive}>
          Start
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;