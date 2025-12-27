import React, { useState, useRef } from 'react';
import './SortableList.css';

function SortableList({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const dragItem = useRef(null); // The index of the item being dragged
  const dragOverItem = useRef(null); // The index of the item being dragged over

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    // This should handle the visual reordering as you drag
    dragOverItem.current = index;
    const newItems = [...items];
    const dragItemContent = newItems[dragItem.current];
    
    // Incorrect splice logic
    newItems.splice(dragItem.current, 1);
    newItems.splice(index, 0, dragItemContent);
    
    dragItem.current = dragOverItem.current;
    setItems(newItems);
  };
  
  const handleDragEnd = (e) => {
    // This is meant to finalize the drag, but it's empty
    e.preventDefault()
  };


  return (
    <div className="sortable-list">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="list-item"
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={(e) => handleDragEnter(index, e)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => e.preventDefault()}
        >
          <span className="drag-handle">::</span>
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default SortableList;