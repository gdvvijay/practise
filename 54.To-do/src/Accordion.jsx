import React, { useState } from 'react';
import AccordionItem from './AccordionItem';


function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <AccordionItem
        key={item.title}
        title={item.title}
        content={item.content}
        isActive={isActive}
        onTitleClick={onTitleClick}
        index={index}
      />
    );
  });

  return (
    <div className="accordion">
      {renderedItems}
    </div>
  );
}

export default Accordion;