import React from 'react';
import './Board.css';

// Square component now gets onSquareClick as a prop directly
function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

// Pass xIsNext down to the Board component
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // Bug 3 Fix: If the square is already filled, do nothing.
    // Bug 4 Fix: If there's a winner, do nothing.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    // Bug 2 Fix: Determine the next player based on the xIsNext prop.
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }
  
  // Duplicated here for Bug 4 fix
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="board-row">
        {/* Bug 1 Fix: Pass an arrow function to onSquareClick, so handleClick(0) is only called *when* the button is clicked. */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;