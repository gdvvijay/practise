import React, {useState, useMemo} from 'react';
import './ItemList.css';

function ItemList({ items }) {
  const [activeTags, setActiveTags] = useState([]);
  
  const allTags = useMemo(() => {
    const tags = new Set();
    items.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [items]);

  
  const filteredItems = useMemo(() => {
    if (activeTags.length == 0) {
      return  items  
    }
    return items.filter((filteredItem,i)=>filteredItem.tags.some(someItem=>activeTags.includes(someItem)));
  }, [items, activeTags]);


  const handleTagClick = (tag) => {
    // const newTags = activeTags;
    // newTags.push(tag);
    setActiveTags(prev=>[...prev,tag]);
  };
  
  const handleClear = () => {
    setActiveTags([])
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