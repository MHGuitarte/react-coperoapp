import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [taskCounter, setTaskCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  //La primera vez que se pulsa el botón de añadir, no añade nada
  const addTodo = (taskText) => {
    setTodos([...todos, { id: taskCounter, text: taskText, done: false }]);
    console.log(todos);

    setTaskCounter(taskCounter + 1);
  };

  const handleDoneTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <h1>Cope's TODO App</h1>
      <TodoInput onAdd={addTodo} />

      <ol className="todoList">
        {todos.map(({ id, text, done }) => {
          return (
            <Todo id={id} text={text} done={done} onDone={handleDoneTask} />
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
