import React from 'react';

const starStyle = {
  cursor: 'pointer',
  fontSize: '40px',
  color: 'lightgray',
};

const filledStarStyle = {
  ...starStyle,
  color: 'gold',
};

function Star({ isFilled, onHoverIn, onHoverOut, onClick }) {
  return (
    <span
      style={isFilled ? filledStarStyle : starStyle} // Always uses the empty style
      onMouseEnter={onHoverIn} // Events are swapped
      onMouseLeave={onHoverOut}
      onClick={onClick} // Click is using the wrong handler
    >
      ★
    </span>
  );
}

export default Star;