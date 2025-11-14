import React, { useState } from 'react';
import './StepProgressBar.css';

function StepProgressBar({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    // Logic to advance to the next step
    setCurrentStep(prev=>prev +1)
  };

  const handlePrev = () => {
    // Logic to go to the previous step
    setCurrentStep(prev=>prev > 0 ? prev - 1 : 0); // Stuck on step 1
  };
  
  // Calculate the width of the progress bar
  const progressWidth = (currentStep / (steps.length-1)) * 100;

  return (
    <div className="step-progress-container">
      <div className="steps">
        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
        {steps.map((step, index) => (
          <div key={step} className={`step-circle ${currentStep == index ? 'active' : ''}`}>{index + 1}</div>
        ))}
      </div>
      <div className="step-controls">
        <button className="btn" onClick={handlePrev} disabled={currentStep === 0}>
          Prev
        </button>
        <button className="btn" onClick={handleNext} disabled={currentStep === steps.length-1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepProgressBar;