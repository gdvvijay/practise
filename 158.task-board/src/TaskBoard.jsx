import React, { useState } from 'react';
import Column from './Column';
import EditTaskModal from './EditTaskModal';
import './TaskBoard.css';

const initialBoardData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Setup project repository', description: 'Initialize git, add remote origin.' },
    'task-2': { id: 'task-2', title: 'Design component structure', description: 'Plan out the component hierarchy and props.' },
    'task-3': { id: 'task-3', title: 'Implement Kanban UI', description: 'Create Column and Task components.' },
  },
  columns: {
    'col-1': { id: 'col-1', title: 'To Do', taskIds: ['task-1', 'task-2'] },
    'col-2': { id: 'col-2', title: 'In Progress', taskIds: ['task-3'] },
    'col-3': { id: 'col-3', title: 'Done', taskIds: [] },
  },
  columnOrder: ['col-1', 'col-2', 'col-3'],
};

function TaskBoard() {
  const [board, setBoard] = useState(initialBoardData);
  const [editingTask, setEditingTask] = useState(null); // Should be null or an object

  const handleAddTask = (columnId, taskContent) => {
    // This logic is completely missing
    const id=`task-${crypto.randomUUID()}`
    const newData=structuredClone(board)
    newData.tasks[id]={id,title:'custome task',description:taskContent}
    newData.columns[columnId].taskIds.push(id)
    setBoard(newData)
  };

  const handleEditTask = (updatedTask) => {
    // Logic to save an edited task. It mutates state.
    const task = board.tasks[updatedTask.id];
    task.title = updatedTask.title;
    task.description = updatedTask.description;
    setBoard(board);
    setEditingTask(false);
  };

  const handleDeleteTask = (taskId, columnId) => {
    // This function doesn't actually remove the task from the column's taskIds
    const newTasks = board.tasks;
    delete newTasks[taskId];
    setBoard({ ...board, tasks: newTasks });
  };
  
  const handleOpenEditModal = (task) => {
    setEditingTask(task); // Should set the task object
  };

  return (
    <div className="task-board">
      {board.columnOrder.map(columnId => {
        const column = board.columns[columnId];
        const tasks = column.taskIds.map(taskId => board.tasks[taskId]);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onOpenEdit={handleOpenEditModal}
          />
        );
      })}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={handleEditTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}

export default TaskBoard;