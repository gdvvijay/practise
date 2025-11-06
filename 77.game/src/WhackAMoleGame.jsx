import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import './WhackAMoleGame.css';

const GAME_DURATION_MS = 20000;
const MOLE_COUNT = 9;

function WhackAMoleGame() {
  const [moles, setMoles] = useState(new Array(MOLE_COUNT).fill(false));
  const [score, setScore] =useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_MS / 1000);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    // --- Main Game Loop for showing moles ---
    // Bug 1 Fix: Ensure the interval is cleared on cleanup.
    const gameLoop = setInterval(() => {
      // Bug 4 Fix: Calculate a proper random index.
      const randomMoleIndex = Math.floor(Math.random() * MOLE_COUNT);
      
      setMoles(currentMoles => {
        const newMoles = [...currentMoles];
        newMoles[randomMoleIndex] = true;
        return newMoles;
      });

      // Bug 2 Fix: Set a timer to hide the mole after a short period.
      setTimeout(() => {
        setMoles(currentMoles => {
          const newMoles = [...currentMoles];
          newMoles[randomMoleIndex] = false;
          return newMoles;
        });
      }, 700); // Mole stays up for 700ms

    }, 1000); // A new mole attempts to appear every second.


    // --- Timer Countdown Logic ---
    // Bug 5 Fix: A separate interval to handle the countdown.
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          setIsActive(false); // End the game
          clearInterval(timer);
          clearInterval(gameLoop); // IMPORTANT: Stop the game loop
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // This cleanup is crucial for both intervals.
    return () => {
      clearInterval(gameLoop);
      clearInterval(timer);
    };
  }, [isActive]);


  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION_MS / 1000);
    setMoles(new Array(MOLE_COUNT).fill(false)); // Clear the board
    setIsActive(true);
  };
  
  const whackMole = (index) => {
    // Return early if the mole isn't up or game is inactive
    if (!moles[index] || !isActive) return;

    // Bug 3 Fix: Correctly update score and hide the whacked mole.
    setScore(prevScore => prevScore + 1);
    setMoles(currentMoles => {
      const newMoles = [...currentMoles];
      newMoles[index] = false;
      return newMoles;
    });
  };

  return (
    <div className="whack-a-mole-container">
      <div className="game-hud">
        <div className="hud-item">Score: <span>{score}</span></div>
        <div className="hud-item">Time Left: <span>{timeLeft}</span></div>
      </div>

      <div className="mole-grid">
        {moles.map((isUp, index) => (
          <Mole key={index} isUp={isUp} onWhack={() => whackMole(index)} />
        ))}
      </div>
      
      {/* Show the start button when the game is not active */}
      {!isActive && <button onClick={startGame} className="start-btn">
        {timeLeft === 0 ? "Play Again" : "Start Game"}
      </button>}
    </div>
  );
}

export default WhackAMoleGame;