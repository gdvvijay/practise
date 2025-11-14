import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (e,i) => {
    // This should open an item
    e.preventDefault()
    setOpenIndex(openIndex == i ? null : i)
  };

  return (
    <div className="accordion">
      {items.map((item,i) => (
        <div key={i} className={`accordion-item ${openIndex === i ? 'open' : ''}`}>
          <div className="accordion-title" onClick={(e)=>handleItemClick(e,i)}>
            <h3>{item.question}</h3>
            <span>+</span>
          </div>
          <div className="accordion-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;