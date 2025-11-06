import React, { useState } from 'react';
import './Tabs.css';

const tabData = [
  { title: 'React', content: 'React is a JavaScript library for building user interfaces.' },
  { title: 'Vue', content: 'Vue is a progressive framework for building user interfaces.' },
  { title: 'Angular', content: 'Angular is a platform for building mobile and desktop web applications.' },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (i) => {
    // This should change the active tab
    setActiveTab(i)
    // console.dir(e.target)
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabData.map((tab,i) => (
          <button key={i} className={activeTab === i ? 'active' : ''} onClick={()=>handleTabClick(i)}>{tab.title}</button>
        ))}
      </div>
      <div className="tab-content">
        <p>{tabData[activeTab].content}</p>
      </div>
    </div>
  );
}

export default Tabs;