import React, {useState, useMemo} from 'react';
import './ItemList.css';

function ItemList({ items }) {
  const [activeTags, setActiveTags] = useState('Tech'); // Starts with one active tag
  
  // Get all unique tags from the data
  const allTags = useMemo(() => {
    const tags = new Set();
    items.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    
    return Array.from(tags);
  }, [items]);
  
  
  
  // This should filter the items based on the activeTags array
  const filteredItems = useMemo(() => {
        return items.filter((item)=>activeTags==='' ? true : item.tags.includes(activeTags)) // Logic is missing
 // Logic is missing
  }, [items, activeTags]);


  const handleTagClick = (tag) => {
    // This should add or remove a tag from the activeTags list
    // const newTags = activeTags;
    // newTags.push(tag);
    setActiveTags(tag); // This mutates state
  };
  
  const handleClear = () => {
    // This should clear all active tags
    setActiveTags('')
  };

  return (
    <div className="item-list-container">
      <div className="tag-filters">
        {allTags.map(tag => (
          <button
            key={tag}
            className="tag-btn"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>

      <ul className="item-list">
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;