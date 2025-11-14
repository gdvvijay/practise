import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

const generateShuffledDeck = (symbols) => {
  const deck = [...symbols, ...symbols].map((symbol, index) => ({
    id: index,
    symbol: symbol,
    isFlipped: false,
    isMatched: false,
  }));
  
  // Bug 1 Fix: Shuffle the deck using the Fisher-Yates algorithm.
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
  }
  return deck;
};

function MemoryGame({ symbols }) {
  const [cards, setCards] = useState(generateShuffledDeck(symbols));
  const [flippedCards, setFlippedCards] = useState([]);
  const [isChecking, setIsChecking] = useState(false); // State to prevent extra clicks

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true); // Prevent further clicks while we check
      const [firstCardIndex, secondCardIndex] = flippedCards;
      const firstCard = cards[firstCardIndex];
      const secondCard = cards[secondCardIndex];

      if (firstCard.symbol === secondCard.symbol) {
        // --- It's a match ---
        // Bug 4 Fix: Immutably update the `cards` array to mark them as matched.
        setCards(prevCards => prevCards.map(card => 
          (card.id === firstCard.id || card.id === secondCard.id)
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);
        setIsChecking(false);
      } else {
        // --- It's not a match ---
        // Bug 3 Fix: Use setTimeout to flip them back after a delay.
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card =>
            (card.id === firstCard.id || card.id === secondCard.id)
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000); // 1-second delay
      }
    }
  }, [flippedCards, cards]);


  const handleCardClick = (cardIndex) => {
    // Bug 5 Fix: Prevent clicks if already checking, or if the card is already flipped/matched.
    if (isChecking || cards[cardIndex].isFlipped || cards[cardIndex].isMatched) {
      return;
    }

    // Flip the clicked card
    setCards(prevCards => prevCards.map(card => 
      card.id === cardIndex ? { ...card, isFlipped: true } : card
    ));

    // Bug 2 Fix: Add the clicked card's index to the flippedCards array instead of overwriting.
    setFlippedCards([...flippedCards, cardIndex]);
  };

  const handleRestart = () => {
    setFlippedCards([]);
    setIsChecking(false);
    setCards(generateShuffledDeck(symbols));
  };

  return (
    <div className="memory-game">
      <div className="game-board">
        {cards.map((card, index) => (
          // Added a key and conditional class for matched cards
          <div
            key={card.id}
            className={`card-container ${card.isMatched ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}>
              <div className="card-face card-front">{card.symbol}</div>
              <div className="card-face card-back">?</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleRestart} className="restart-btn">Restart Game</button>
    </div>
  );
}

export default MemoryGame;