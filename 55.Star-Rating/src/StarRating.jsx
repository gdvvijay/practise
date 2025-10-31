import React, { useState } from 'react';
import Star from './Star';
import './StarRating.css';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <Star key={index}
            filled={ratingValue <= rating || ratingValue <= hover}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(rating)}
            onClick={() => setRating(hover)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;