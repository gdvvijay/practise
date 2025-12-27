import React, { useState } from 'react';
import Node from './Node';
import './FolderTree.css';

// Using crypto.randomUUID() is a better way to generate unique IDs than a simple counter.
// let nextId = 100;

function FolderTree({ initialData }) {
  const [treeData, setTreeData] = useState(initialData);

  // Recursive helper function to insert a node immutably
  const insertNodeRecursive = (currentNode, folderId, name, isFolder) => {
    // If this is the folder we want to add to
    if (currentNode.id === folderId) {
      return {
        ...currentNode,
        children: [
          ...(currentNode.children || []), // Ensure children array exists
          {
            id: crypto.randomUUID(), // Use a robust unique ID
            name,
            isFolder,
            children: [],
          },
        ],
      };
    }

    // If not the target folder, recursively check its children
    if (currentNode.children && currentNode.children.length > 0) {
      return {
        ...currentNode,
        children: currentNode.children.map((child) =>
          insertNodeRecursive(child, folderId, name, isFolder)
        ),
      };
    }

    // If no children or not the target, return the current node as is
    return currentNode;
  };

  const handleInsertNode = (folderId, name, isFolder) => {
    setTreeData((prevTreeData) =>
      insertNodeRecursive(prevTreeData, folderId, name, isFolder)
    );
  };

  // Recursive helper function to delete a node immutably
  const deleteNodeRecursive = (currentNode, nodeIdToDelete) => {
    // If the current node itself is the one to delete, return null to remove it
    if (currentNode.id === nodeIdToDelete) {
      return null;
    }

    // If the current node has children, filter them
    if (currentNode.children && currentNode.children.length > 0) {
      const newChildren = currentNode.children
        .map((child) => deleteNodeRecursive(child, nodeIdToDelete))
        .filter(Boolean); // Filter out any nulls (deleted children)

      // Return a new node with the updated children
      return {
        ...currentNode,
        children: newChildren,
      };
    }

    // If no children and not the target, return the current node as is
    return currentNode;
  };

  const handleDeleteNode = (nodeId) => {
    setTreeData((prevTreeData) => {
      const newTreeData = deleteNodeRecursive(prevTreeData, nodeId);
      // If the root node itself was deleted, you might want to handle it (e.g., set to an empty object or null)
      // For now, if the root is deleted, newTreeData will be null, which might cause rendering issues if not handled in Node.
      return newTreeData;
    });
  };

  return (
    <div className="folder-tree">
      {treeData ? ( // Add a check to ensure treeData is not null if root can be deleted
        <Node
          node={treeData}
          onInsert={handleInsertNode}
          onDelete={handleDeleteNode}
        />
      ) : (
        <div>No folder tree to display.</div>
      )}
    </div>
  );
}

export default FolderTree;