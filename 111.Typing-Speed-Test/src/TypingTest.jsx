import React, { useState, useEffect, useRef } from 'react';
import './TypingTest.css';

const GAME_TIME_SECONDS = 30;

function TypingTest({ text }) {
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(GAME_TIME_SECONDS);
  const [isGameActive, setIsGameActive] = useState(false);
  const [results, setResults] = useState(null);
  const inputRef = useRef(null);
  
  // Game timer logic
  useEffect(() => {
    let intervalId
    if (isGameActive && timer > 0) {
      // The interval is recreated on every keystroke
      intervalId=setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Game ended
      setIsGameActive(false);
    }
    return ()=>clearInterval(intervalId)
  }, [timer, isGameActive]);
  
  const handleStart = () => {
    setIsGameActive(true);
    setUserInput('');
    setTimer(GAME_TIME_SECONDS);
    setResults(null);
  };
  
  const handleInputChange = (e) => {
    // This should handle the user's typing input
    if(isGameActive){
        
        setUserInput(e.target.value);
        const everyMatch=e.target.value.split('').every((char,i)=>char === text[i])
        if(everyMatch){
            setResults({wpm:e.target.value.length / 5 * 2 })
        }else{
            setResults(null)
        }
    }
  };
  
  // This function renders the source text with character-by-character styling
  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = 'char-default';
      if (userInput.length > index) {
        className = (char === userInput[index]) ? 'char-correct' : 'char-incorrect';
      }
      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <div className="typing-test-container">
      <div className="text-display">
        {renderText()}
      </div>
      
      <textarea
        ref={inputRef}
        className="typing-input"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Click start and begin typing here..."
      />
      
      <div className="game-stats">
        <span>Time: {timer}</span>
        <span>WPM: {results ? results.wpm : '--'}</span>
        <button onClick={handleStart} disabled={isGameActive}>Start</button>
      </div>

      {results && <div className="results">Finished! Your score: {results.wpm} WPM</div>}
    </div>
  );
}

export default TypingTest;