import React, { useState } from 'react';
import TreeNode from './TreeNode';
import './FileExplorer.css';

function FileExplorer({ data }) {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    // This should toggle the expanded state for a specific node
    setExpanded(prev=>({...prev,[id]:!prev[id]}));
  };

  return (
    <div className="file-explorer">
      <TreeNode node={data} onToggle={handleToggle} expandedNodes={expanded}/>
    </div>
  );
}

export default FileExplorer;