import React from 'react';

const AccordionItem = ({ title, content, isActive, onTitleClick, index }) => {
  return (
    <div className="accordion-item">
      <div className="title" onClick={()=>onTitleClick(index)}>
        <h3>{title}</h3>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      <div className={`content ${isActive && 'active'}`}>
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;


