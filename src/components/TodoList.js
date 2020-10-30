import React, { useState } from "react";
import TodoInput from "./TodoInput";

const TodoList = () => {
  let todosCounter = -1;

  const [todos, setTodos] = useState([]);

  //La primera vez que se pulsa el botón de añadir, no añade nada
  const addTodo = (taskText) => {
    setTodos([...todos, { id: todosCounter++, text: taskText, done: false }]);
    console.log(todos);
  };

  return (
    <div>
      <h1>Soy el container</h1>
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoList;
