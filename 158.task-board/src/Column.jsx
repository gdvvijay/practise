import React from 'react';
import Task from './Task';
import './TaskBoard.css';

function Column({ column, tasks, onAddTask, onDeleteTask, onOpenEdit }) {
    // console.log(column)
  const handleAddTaskClick = () => {
    const title = prompt("Enter new task title:");
    onAddTask(column.id , title); // Missing columnId
  };

  return (
    <div className="column">
      <h3 className="column-title">{column.title}</h3>
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onOpenEdit={() => onOpenEdit(task)}
          />
        ))}
        <button className="add-task-btn" onClick={handleAddTaskClick}>
          + Add a card
        </button>
      </div>
    </div>
  );
}

export default Column;