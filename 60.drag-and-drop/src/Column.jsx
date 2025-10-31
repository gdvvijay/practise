import React from 'react';
import Card from './Card';
import './Column.css';

// Bug 6 Fix (Part 3): Accept new props for drag-over state and handlers.
const Column = ({ column, tasks, onDragStart, onDrop, isDraggingOver, onDragEnter, onDragLeave }) => {
  return (
    // Add conditional class for highlighting.
    <div
      className={`column ${isDraggingOver ? 'drag-over' : ''}`}
      // Bug 1 Fix: `preventDefault` must be *called* as a function: e.preventDefault().
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
          onDrop(e, column.id)
          onDragLeave(); // Explicitly call onDragLeave to ensure highlighting is removed on drop.
      }}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      <h3 className="column-title">{column.title}</h3>
      <div className="task-list">
        {/* Bug 5 Fix: Add a unique and stable `key` to the Card component. */}
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            // Bug 4 Fix (Part 3): Pass the column.id to the Card's onDragStart.
            onDragStart={(e) => onDragStart(e, task.id, column.id)}
          />
        ))}
        {/* Placeholder to make empty columns droppable */}
        {tasks.length === 0 && <div className="task-placeholder"></div>}
      </div>
    </div>
  );
};

export default Column;