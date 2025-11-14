import React, { useState } from 'react';
import './TodoList.css';

let nextId = 3;

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Complete project proposal',
      completed: false,
      subtasks: [
        { id: 101, text: 'Draft outline', completed: true },
        { id: 102, text: 'Get feedback', completed: false },
      ],
    },
    { id: 2, text: 'Go grocery shopping', completed: false, subtasks: [] },
  ]);
  const [newTodoText, setNewTodoText] = useState('');


  const handleAddTodo = () => {
    // Logic to add a new top-level to-do item
    if(!newTodoText) return
    setTodos(prev=>[...prev,{id:crypto.randomUUID(),text:newTodoText,completed:false,subtasks:[]}])
    setNewTodoText('');
  };

  const handleToggleTodo = (todoId) => {
    // This should toggle the completed status of a top-level to-do
    setTodos(prev=>prev.map((item)=>item.id === todoId ? ({...item,completed:!item.completed}) : item));
  };
  
  const handleAddSubtask = (parentTodoId, subtaskText) => {
    // This should add a new subtask to a specific to-do
    if (!subtaskText) return;
    setTodos(prev=>prev.map((currentTodo)=>currentTodo.id == parentTodoId ? ({...currentTodo,subtasks:[...currentTodo.subtasks,{id:crypto.randomUUID(),text:subtaskText,completed:false}]}) : currentTodo))


  };

  return (
    <div className="todo-list-container">
      <div className="add-todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new main task..."
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id}
            todo={todo}
            onToggle={()=>handleToggleTodo(todo.id)}
            onAddSubtask={handleAddSubtask}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

// -- A child component in the same file --
function TodoItem({ todo, onToggle, onAddSubtask,setTodos }) {
  const [subtaskText, setSubtaskText] = useState('');
  
  const handleSubtaskSubmit = () => {
    onAddSubtask(todo.id,subtaskText);
    setSubtaskText('');
  };
const handleSubtaskChange = (todoId,subtaskId)=>{
  setTodos(prev=>prev.map((todo)=>todo.id==todoId ? ({...todo,subtasks:todo.subtasks.map((subtask)=>subtask.id == subtaskId ? ({...subtask,completed:!subtask.completed}) : subtask)}) : todo))
}
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="main-task">
        <input type="checkbox" checked={todo.completed} onChange={onToggle}/>
        <span>{todo.text}</span>
      </div>
      
      <ul className="subtask-list">
        {todo.subtasks.map(subtask => (
          <li key={subtask.id} className={subtask.completed ? 'completed' : ''}>
            <input type="checkbox" checked={subtask.completed} onChange={()=>handleSubtaskChange(todo.id,subtask.id)}/>
            {subtask.text}
          </li>
        ))}
      </ul>

      <div className="add-subtask-form">
        <input
          type="text"
          value={subtaskText}
          onChange={(e) => setSubtaskText(e.target.value)}
          placeholder="Add a subtask..."
        />
        <button onClick={handleSubtaskSubmit}>Add</button>
      </div>
    </li>
  );
}

export default TodoList;