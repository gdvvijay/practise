import React, { useState } from 'react';
import StarRating from './StarRating';
import './App.css';

function App() {
  const [rating, setRating] = useState(1); // Start with a default rating

  return (
    <div className="container">
      <header>
        <h1>Buggy Star Rating</h1>
        <p>Try to rate the product below. The stars are not behaving correctly.</p>
      </header>
      <main className="rating-box">
        <h2>Rate This Product</h2>
        <StarRating totalStars={5} rating={rating} onRate={setRating} />
        <p className="rating-value">Your selected rating is: {rating}</p>
      </main>
    </div>
  );
}

export default App;