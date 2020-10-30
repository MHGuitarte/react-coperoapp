import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [taskCounter, setTaskCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [taskError, setTaskError] = useState(false);

  //La primera vez que se pulsa el botón de añadir, no añade nada
  const addTodo = (taskText) => {
    if (taskText !== "") {
      setTaskError(false);

      setTodos([...todos, { id: taskCounter, text: taskText, done: false }]);
      setTaskCounter(taskCounter + 1);

      console.log(todos);
    } else {
      setTaskError(true);
    }
  };

  const handleDoneTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <h1>Cope's TODO App</h1>
      <TodoInput onAdd={addTodo} />
      {taskError && <small className="errorText">Introduce una tarea</small>}
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
