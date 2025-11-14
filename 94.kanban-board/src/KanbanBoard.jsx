import React, {useState } from 'react';
import './KanbanBoard.css';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Design the homepage' },
    'task-2': { id: 'task-2', content: 'Set up the database' },
    'task-3': { id: 'task-3', content: 'Implement user authentication' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

function KanbanBoard() {
  const [boardData, setBoardData] = useState(initialData);
    let sourceColumn=''
  const handleDragStart = (e, taskId, column) => {
    // This should set the data for the drag operation
    sourceColumn=column
    e.dataTransfer.setData('mydata',taskId);
  };

  const handleDragOver = (e) => {
    // This is needed to allow dropping
    e.preventDefault()
  };

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('mydata');

    if(sourceColumn == targetColumnId) return 

    let tempObject=JSON.parse(JSON.stringify(boardData))
    tempObject={ ...tempObject,columns:{...tempObject.columns,[sourceColumn]: {...tempObject.columns[sourceColumn], taskIds:tempObject.columns[sourceColumn].taskIds.filter((item)=>item !== taskId)},[targetColumnId]:{...tempObject.columns[targetColumnId],taskIds : [...tempObject.columns[targetColumnId].taskIds, taskId]}}}

    setBoardData(tempObject);
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
          />
        );
      })}
    </div>
  );
}


function Column({ column, tasks, onDragStart, onDragOver, onDrop }) {
  return (
    <div className="column" onDragOver={onDragOver} onDrop={(e) => onDrop(e,column.id)}>
      <h3>{column.title}</h3>
      <div className="task-list">
        {tasks.map(task => <Card key={task.id} task={task} onDragStart={onDragStart} column={column} />)}
      </div>
    </div>
  );
}

function Card({ task, onDragStart ,column}) {
  return (
    <div
      className="card"
      draggable
      onDragStart={e => onDragStart(e,task.id,column.id)}
    >
      {task.content}
    </div>
  );
}

export default KanbanBoard;