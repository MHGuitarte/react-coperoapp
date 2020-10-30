import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    onAdd(taskInput);
    setTaskInput("");
  };

  const enterAddTask = (e) => {
    if (e.code === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="todoInputContainer">
      <input
        type="text"
        name="taskInput"
        id="taskInput"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={(e) => enterAddTask(e)}
      />
      <button id="taskButton" onClick={handleAddTask}>Añadir</button>
    </div>
  );
};

export default TodoInput;
