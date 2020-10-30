import React from "react";

const Todo = ({ id, text, onDone }) => {
  const handleTaskDone = () => {
    onDone(id);
  };

  return (
    <li className="task" id={id}>
      <label for={id} className="taskTitle">{text}</label>
      <span className="taskDoneInput" id={id} onClick={handleTaskDone} />
    </li>
  );
};

export default Todo;
