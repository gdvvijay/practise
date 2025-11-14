import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen,setIsOpen]=useState(true)

  const handleItemClick = (i) => {
    // This should open an item
    setIsOpen(prev=>!prev)
    if(isOpen){
        setOpenIndex(i)
    }else{
        setOpenIndex(null)
    }
    
  };

  return (
    <div className="accordion">
      {items.map((item,i) => (
        <div key={item.id} className={`accordion-item ${openIndex == i ? 'open': ''}`}>
          <div className="accordion-title" onClick={()=>handleItemClick(i)}>
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
