import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
        onClick={()=>onToggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={()=>onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;