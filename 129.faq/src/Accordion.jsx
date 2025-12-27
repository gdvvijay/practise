import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (id) => {
    if(id == openIndex){
      setOpenIndex(null)
    }else{
      setOpenIndex(id)
    }
  };

  return (
    <div className="accordion">
      {items.map(item => (
        <div className={`accordion-item ${openIndex == item.id ? 'open' : ''}`}>
          <div className="accordion-title" onClick={()=>handleItemClick(item.id)}>
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