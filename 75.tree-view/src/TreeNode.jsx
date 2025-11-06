import { useRef } from "react";

const FOLDER_ICON_OPEN = '📂';
const FOLDER_ICON_CLOSED = '📁';
const FILE_ICON = '📄';
function TreeNode({ node, expandedNodes, onToggle }) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded=expandedNodes[node.id];
  return (
    <div className="tree-node">
      <div
        className="node-label"
        onClick={hasChildren ? (e) => onToggle(node.id) : null}
      >
        <span>{hasChildren ? (isExpanded ? FOLDER_ICON_OPEN : FOLDER_ICON_CLOSED) : FILE_ICON}</span>
        <span className="node-name">{node.name}</span>
      </div>
      {hasChildren && (
        <div className={`children-container ${isExpanded ? "collapsed" : ""}`}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onToggle={onToggle} expandedNodes={expandedNodes} />
          ))}
        </div>
      )}
    </div>
  );
}
export default TreeNode;
