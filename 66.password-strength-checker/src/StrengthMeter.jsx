import React from 'react';
import './StrengthMeter.css';

function StrengthMeter({ checks }) {
  const getStrengthInfo = () => {
    const passedChecks = Object.values(checks).filter(value => value).length;

    switch (passedChecks) {
      case 0:
        return { text: 'Very Weak', level: 0 };
      case 1:
        return { text: 'Weak', level: 1 };
      case 2:
        return { text: 'Medium', level: 3 };
      case 3:
        return { text: 'Strong', level: 3 };
      case 4:
        return { text: 'Very Strong', level: 4 };
    }
  };
  
  const { text, level } = getStrengthInfo();

  return (
    <div className="strength-meter">
      <div className="strength-bar-container">
        <div className={`strength-bar strength-level-${level}`}></div>
      </div>
      <p className="strength-text">Strength: {text}</p>
    </div>
  );
}

export default StrengthMeter;