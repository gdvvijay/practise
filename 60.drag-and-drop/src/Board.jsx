import React, { useState } from 'react';
import Column from './Column';
import './Board.css';

const initialBoardData = {
  columns: {
    'col-1': {
      id: 'col-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'col-2': {
      id: 'col-2',
      title: 'In Progress',
      taskIds: ['task-4'],
    },
    'col-3': {
      id: 'col-3',
      title: 'Done',
      taskIds: [],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Configure the build pipeline' },
    'task-2': { id: 'task-2', content: 'Design the database schema' },
    'task-3': { id: 'task-3', content: 'Write the user authentication service' },
    'task-4': { id: 'task-4', content: 'Implement the main dashboard UI' },
  },
  columnOrder: ['col-1', 'col-2', 'col-3'],
};

function Board() {
  const [boardData, setBoardData] = useState(initialBoardData);
  // Bug 6 Fix (Part 1): Add state to track which column is being dragged over.
  const [draggingOverCol, setDraggingOverCol] = useState(null);

  // Bug 4 Fix (Part 1): Pass the source columnId along with the taskId.
  const onDragStart = (e, taskId, sourceColumnId) => {
    // Stringify an object to carry both pieces of data.
    const dragData = JSON.stringify({ taskId, sourceColumnId });
    e.dataTransfer.setData('application/json', dragData);
  };

  const onDrop = (e, targetColumnId) => {
    // Reset drag-over styling.
    setDraggingOverCol(null);

    // Bug 4 Fix (Part 2): Get and parse the full drag data object.
    const dragData = JSON.parse(e.dataTransfer.getData('application/json'));
    const { taskId, sourceColumnId } = dragData;

    // Prevent dropping a card on its original column.
    if (sourceColumnId === targetColumnId) {
      return;
    }

    // Bug 3 Fix: Use the functional form of setState (`setBoardData(prevData => ...)`)
    // to ensure all updates are performed immutably and React detects the change.
    setBoardData(prevData => {
      // Create deep copies to avoid mutation.
      const newBoardData = { ...prevData, columns: { ...prevData.columns } };

      const sourceColumn = { ...newBoardData.columns[sourceColumnId] };
      const targetColumn = { ...newBoardData.columns[targetColumnId] };

      // Bug 2 Fix: Remove the taskId from the source column's taskIds array.
      sourceColumn.taskIds = sourceColumn.taskIds.filter(id => id !== taskId);
      // Add the taskId to the target column's taskIds array.
      targetColumn.taskIds = [...targetColumn.taskIds, taskId];

      // Update the board data with the modified columns.
      newBoardData.columns[sourceColumnId] = sourceColumn;
      newBoardData.columns[targetColumnId] = targetColumn;

      return newBoardData;
    });
  };

  return (
    <div className="board">
      {/* Bug 5 Fix: Add a unique and stable `key` to the top-level element in the map. */}
      {boardData.columnOrder.map(columnId => {
        const column = boardData.columns[columnId];
        const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            onDragStart={onDragStart}
            onDrop={onDrop}
            // Bug 6 Fix (Part 2): Pass down handlers and state for drag-over highlighting.
            isDraggingOver={draggingOverCol === column.id}
            onDragEnter={() => setDraggingOverCol(column.id)}
            onDragLeave={() => setDraggingOverCol(null)}
          />
        );
      })}
    </div>
  );
}

export default Board;