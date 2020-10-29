import React, { useState } from "react";

const Todo = () => {
  const [{ id, task, done }, setTodo] = useState({
    id: "",
    task: "",
    done: false,
  });

  function changeTask() {
    setTodo({
      id: id,
      task: task,
      done: !done,
    });
  }

  return (
    <div
      class="todo"
      style={{
        display: "flex",
        flexFlow: "row",
        textDecoration: done ? "line-through" : 0,
      }}
      id={id}
    >
      <h3>{task}</h3>
      <input type="checkbox" onChange={changeTask} />
    </div>
  );
};

export default Todo;
