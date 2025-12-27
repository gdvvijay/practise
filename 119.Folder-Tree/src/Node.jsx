import React, { useState } from 'react';

function Node({ node, onInsert, onDelete }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newNodeName, setNewNodeName] = useState('');
  const [newNodeType, setNewNodeType] = useState('file');

  const handleAddClick = () => {
    onInsert(node.id,newNodeName, newNodeType === 'folder');
  };
  return (
    <div className="node">
      <div className="node-label">
        <span>{node.isFolder ? '📁' : '📄'}</span>
        <span>{node.name}</span>

        {node.isFolder && (
          <button className="action-btn add" onClick={() => setIsAdding(true)}>+</button>
        )}
      </div>

      <div style={{ paddingLeft: '20px' }}>
        {isAdding && (
          <div className="add-node-form">
            <select onChange={(e) => setNewNodeType(e.target.value)}>
              <option value="file">File</option>
              <option value="folder">Folder</option>
            </select>
            <input
              type="text"
              value={newNodeName}
              onChange={(e) => setNewNodeName(e.target.value)}
              placeholder="Name..."
              autoFocus
            />
            <button onClick={handleAddClick}>Add</button>
            <button onClick={() => setIsAdding(false)}>Cancel</button>
          </div>
        )}

        {node.children?.map(child => (
          <Node
            node={child}
            onInsert={onInsert}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Node;