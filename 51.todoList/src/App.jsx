import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', isCompleted: false },
    { id: 2, text: 'Find Bugs', isCompleted: false },
    { id: 3, text: 'Get a Job', isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = crypto.randomUUID();
      setTodos([...todos, { id: newId, text: newTodo, isCompleted: false }]);
    }
  };

  const handleToggleComplete = (id) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    if (todoToToggle) {
      // todoToToggle.isCompleted = !todoToToggle.isCompleted;
      setTodos(prev=>prev.map((item)=>({...item,isCompleted:!item.isCompleted})));
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id != id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Buggy Todo List</h1>
      <AddTodoForm
        newTodo={newTodo}
        onNewTodoChange={setNewTodo}
        onAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;