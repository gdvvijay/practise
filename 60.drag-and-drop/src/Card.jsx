import React from 'react';
import './Card.css';

// No functional changes were strictly needed here, but the props flow *through* this component.
// The `onDragStart` prop it receives from Column.jsx is now a function that correctly includes the columnId.
const Card = ({ task, onDragStart }) => {
  return (
    <div
      className="card"
      draggable
      onDragStart={onDragStart}
    >
      {task.content}
    </div>
  );
};

export default Card;