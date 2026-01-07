import React, {useState} from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState({1:false,2:false,3:false});

  const handleItemClick = (item) => {
    setOpenIndex(prev=>({...prev,[item.id]: prev[item.id] === true ? false : true}))
  };

  return (
    <div className="accordion">
      {items.map(item => (
        <div key={item.id} className={`accordion-item ${openIndex[item.id] === true ? 'open' : ''}`} >
          <div className="accordion-title" onClick={()=>handleItemClick(item)}>
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