import React, { useRef, useState } from 'react';
import './KanbanBoard.css';

// Using a more robust initial data structure
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Configure the build pipeline' },
    'task-2': { id: 'task-2', content: 'Design the database schema' },
    'task-3': { id: 'task-3', content: 'Write user authentication service' },
  },
  columns: {
    'col-1': { id: 'col-1', title: 'To Do', taskIds: ['task-1', 'task-2', 'task-3'] },
    'col-2': { id: 'col-2', title: 'In Progress', taskIds: [] },
    'col-3': { id: 'col-3', title: 'Done', taskIds: [] },
  },
  columnOrder: ['col-1', 'col-2', 'col-3'],
};

function KanbanBoard() {
  const [boardData, setBoardData] = useState(initialData);
  const draggedItem = useRef(null);
  const newDataRef=useRef(null)

  const handleDragOver = (e) => {
    // This is needed to allow dropping. It's missing a key part.
    e.preventDefault()
  };
  
  const handleDragStart = (e, task, sourceColumnId) => {
    // Data being transferred is incomplete
    // console.log(task)
    // setDraggedItem(task)
    e.dataTransfer.setData('data/text/',task)
    draggedItem.current=task
  //  const newBoarData = structuredClone(boardData)
    // newBoarData.columns[sourceColumnId].taskIds.splice(newBoarData.columns[sourceColumnId].taskIds.indexOf(task),1)
    newDataRef.current={task,sourceColumnId}
    // setBoardData(newBoarData)
  };

  const handleDrop = (e, targetColumnId) => {
    // Core logic for moving tasks is completely missing or wrong
    // console.log(targetColumnId)
    // e.preventDefault()
    // const taskId = 'task-1';
   const data = e.dataTransfer.getData('data/text/')
    
    const newBoardData = structuredClone(boardData);
    newBoardData.columns[targetColumnId].taskIds.push(data);
    newBoardData.columns[newDataRef.current.sourceColumnId].taskIds.splice(newBoardData.columns[newDataRef.current.sourceColumnId].taskIds.indexOf(data),1)
    // console.log(draggedItem)
    setBoardData(newBoardData);
  };
  
  const handleAddTask = (columnId, content) => {

    const newTaskId = `task-${Date.now()}`;
    // Add task logic is incomplete and mutates state
    const newData= structuredClone(boardData)
    newData.tasks[newTaskId]={id:newTaskId,content:content}
    newData.columns[columnId].taskIds.push(newTaskId)
    setBoardData(newData)
  };
  
  const handleEditTask = (taskId, newContent) => {
    // Logic to edit a task's content is missing
    console.log(`Editing ${taskId} with: ${newContent}`);
  };

  return (
    <div className="kanban-board">
      {boardData.columnOrder.map(columnId => {
        const column = boardData.columns[columnId];
        const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);
        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
          />
        );
      })}
    </div>
  );
}

function Column({ column, tasks, onDragStart, onDragOver, onDrop, onAddTask, onEditTask }) {
  const [showAddForm, setShowAddForm] = useState(false);
  
  const handleDropInColumn = (e) => {
    onDrop(e, column.id);
  };

  return (
    <div className="column" onDragOver={onDragOver} onDrop={handleDropInColumn}>
      <h3>{column.title} <button onClick={setShowAddForm}>+</button></h3>
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDragStart={e => onDragStart(e, task.id, column.id)}
            onEditTask={onEditTask}
          />
        ))}
      </div>
      {showAddForm && (
        <AddTaskForm
          onAdd={content => onAddTask(column.id,content)}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}

function Task({ task, onDragStart, onEditTask }) {
  return (
    <div className="task-card" draggable onDragStart={onDragStart}>
      {task.content}
    </div>
  );
}

function AddTaskForm({ onAdd, onCancel }) {
  const [content, setContent] = useState('');
  return (
    <div className="add-task-form">
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Enter a title for this card..."
        autoFocus
      />
      <button onClick={() => {
        onAdd(content)
        onCancel()
      }}>Add Card</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default KanbanBoard;