import React, { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  gap: '5px',
};

function StarRating({ totalStars, rating, onRate }) {
  const [hoverRating, setHoverRating] = useState(1);
   const displayRating = hoverRating || rating;
  return (
    <div style={containerStyle}>
      {Array.from({ length: totalStars }, (v, i) => (
        <Star key={i}
          isFilled={displayRating  > i}
          onHoverIn={() => setHoverRating(i + 1)}
          onHoverOut={() => setHoverRating(0)}
          onClick={() => onRate(i+1)}
        />
      ))}
    </div>
  );
}

export default StarRating;