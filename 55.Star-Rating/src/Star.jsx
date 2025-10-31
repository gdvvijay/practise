import React from 'react';

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span className={filled ? 'star filled' : 'star empty'}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      ★
    </span>
  );
};

export default Star;