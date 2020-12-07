import React, { useState } from "react";
import './App.css';
function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setTodo("");
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id != todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>วันนี้ต้าวอ้วงทำอะไรมาบ้างงับ</h1>
        <br />
        <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className="todo-completed"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>

            <span className="delete-btn" onClick={() => removeTodo(todo.id)}>
              Clickme!Delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
