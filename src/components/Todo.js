import React, { useState } from "react";

const Todo = ({ id, text, done, onDone }) => {
  const [taskDone, setDone] = useState(done);

  const handleTaskDone = () => {
    setDone(!taskDone);
    onDone(taskDone);
  }

  return (
    <div
      class="todo"
      style={{
        display: "flex",
        flexFlow: "row",
        textDecoration: taskDone ? "line-through" : 0,
      }}
      id={id}
    >
      <h3 style={{ display: "inline" }}>{text}</h3>
      <input type="checkbox" onChange={handleTaskDone} />
    </div>
  );
};

export default Todo;
