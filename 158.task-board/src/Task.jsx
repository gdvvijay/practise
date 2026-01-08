import React from 'react';
function Task({ task, onDelete, onOpenEdit }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={onOpenEdit} className="edit-btn">Edit</button>
    </div>
  );
}
export default Task;