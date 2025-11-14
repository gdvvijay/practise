import React, {useState, useEffect} from 'react';
import './Countdown.css';

function Countdown({ endTime }) {
  const [timeLeft, setTimeLeft] = useState({days:0,hours:0,minutes:0,seconds:0});
  const [isFinished, setIsFinished] = useState(false); // Should be false

  useEffect(() => {
    // This effect should calculate the time remaining and update the state.
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime - now;
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    const timer = setInterval(() => {
        const timerObj=calculateTimeLeft()
      setTimeLeft(timerObj)
      if(Object.keys(timerObj).length == 0 ){
        setIsFinished(true)
        return ()=> clearInterval(timer)
      }
    }, 1000);

    
  }, [endTime]);


  if (isFinished) {
    return <div className="countdown-container finished"><h2>Time's Up!</h2></div>;
  }

  return (
    <div className="countdown-container">
      <div className="time-segment">
        <span className="time-value">{timeLeft.days}</span>
        <span className="time-label">Days</span>
      </div>
      <div className="time-segment">
        <span className="time-value">{timeLeft.hours}</span>
        <span className="time-label">Hours</span>
      </div>
      <div className="time-segment">
        <span className="time-value">{timeLeft.minutes}</span>
        <span className="time-label">Minutes</span>
      </div>
      <div className="time-segment">
        <span className="time-value">{timeLeft.seconds}</span>
        <span className="time-label">Seconds</span>
      </div>
    </div>
  );
}

export default Countdown;