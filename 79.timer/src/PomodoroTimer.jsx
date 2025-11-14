import React, {useState, useEffect} from 'react';
import './PomodoroTimer.css';

const WORK_MINUTES = 25 * 60;
const BREAK_MINUTES = 5 * 60;

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(WORK_MINUTES);
  const [mode, setMode] = useState('work'); // 'work' or 'break'
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Main timer logic
    let interval
    if (isActive) {
       interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return ()=>clearInterval(interval)
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    if(isActive){
        setIsActive(true);
    }
    setTimeLeft(WORK_MINUTES);
  };
  
  // Format the time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className={`pomodoro-timer ${mode}`}>
      <div className="timer-display">
        {formatTime(timeLeft)}
      </div>
      <div className="timer-status">
        Current Mode: {mode === 'work' ? 'Work Session' : 'Break Time'}
      </div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;