import React, { useState, useRef } from 'react';
import './SortableList.css';

function SortableList({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
    const newItems = [...items];
    const dragItemContent = newItems[dragItem.current];
    
    newItems.splice(dragItem.current, 1);
    newItems.splice(dragOverItem.current, 0, dragItemContent);
    
    dragItem.current = dragOverItem.current;
    setItems(newItems);
  };
  
  const handleDragEnd = () => {
    
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