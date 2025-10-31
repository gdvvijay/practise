import React from 'react';

function AddTodoForm({ newTodo, onNewTodoChange, onAddTodo }) {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => onNewTodoChange(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
}

export default AddTodoForm;