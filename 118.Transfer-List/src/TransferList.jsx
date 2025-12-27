import React, { useState } from 'react';
import './TransferList.css';

function TransferList({ initialItems }) {
  const [leftItems, setLeftItems] = useState(initialItems);
  const [rightItems, setRightItems] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);


  const handleSelect = (item, side) => {
    // This logic is missing. It should add/remove from the selection.
    if (side === 'left') {
      setSelectedLeft([item]);
      
    }
    if(side === 'right'){
      setSelectedRight([item])
      
      
    }
  };

  const moveRight = (leftItem) => {
    // This should move selected items from left to right
    if(!leftItem) return 
    const itemsToMove = selectedLeft;
    setRightItems(prev=>[...prev, ...itemsToMove]);
    // The items are not being removed from the left list
    setLeftItems(prev=>prev.filter(filtered=>filtered.id !== leftItem.id))
    setSelectedLeft([])
  }
  const moveLeft = (rightItem) => {
    if(!rightItem) return
    // This should move selected items from right to left
    // The logic is completely missing
    const itemsToMove = selectedRight;
   
    setLeftItems(prev=>[...prev, ...itemsToMove]);
    setRightItems(prev=>prev.filter(filtered=>filtered.id !== rightItem.id))
    setSelectedRight([])
  };


  const renderList = (items, selectedItems, side) => (
    <div className="list-box">
      {items.map(item => (
        <div
          key={item.id}
          className="list-item"
          onClick={() => handleSelect(item, side)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );

  return (
    <div className="transfer-list-container">
      {renderList(leftItems, selectedLeft, 'left')}

      <div className="controls">
        <button onClick={()=>moveRight(selectedLeft[0])}>{'>'}</button>
        <button onClick={()=>moveLeft(selectedRight[0])}>{'<'}</button>
      </div>
      
      {renderList(rightItems, selectedRight, 'right')}
    </div>
  );
}

export default TransferList;