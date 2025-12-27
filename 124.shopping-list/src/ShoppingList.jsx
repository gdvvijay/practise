import React, { useState, useEffect } from 'react';
import './ShoppingList.css';

function ShoppingList() {
  const [items, setItems] = useState(()=>{
    const data=JSON.parse(localStorage.getItem('shoppingList'))
    if(data){
        return data
    }else{
        return []
    }
  }); // List is always empty on start
  const [newItem, setNewItem] = useState('');

  // Effect for loading items from localStorage
//   useEffect(() => {
//     // This logic is completely missing
//     setItems(JSON.parse(localStorage.getItem('shoppingList')))
//     // setItems( [])
//   }, []);

  // Effect for saving items to localStorage
  useEffect(() => {
    // This is supposed to save, but doesn't run at the right time
    window.localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [newItem]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const newItemObject = { id: Date.now(), text: newItem };
    setItems(prev=>[...prev,newItemObject]); // Overwrites existing items
    setNewItem('');
  };
  
  const handleRemoveItem = (idToRemove) => {
    // const updatedItems = items; // State mutation
    // updatedItems.splice(0, 1); // Incorrect removal logic
    setItems(prev=>prev.filter(filterItem=>filterItem.id != idToRemove));
  };
  
  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div className="shopping-list-container">
      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="e.g., Eggs"
        />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p className="empty-message">Your shopping list is empty!</p>
      ) : (
        <ul className="shopping-list">
          {items.map(item => (
            <li key={item.id} className="shopping-list-item">
              <span>{item.text}</span>
              <button onClick={()=>handleRemoveItem(item.id)} className="remove-btn">
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleClearList} className="clear-btn">
        Clear All
      </button>
    </div>
  );
}

export default ShoppingList;