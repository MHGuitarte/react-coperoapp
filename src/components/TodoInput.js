import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    onAdd(taskInput);
    setTaskInput("");
  };

  const enterAddTask = (e) => {
    console.log(e.code);
    if (e.code === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="taskInput"
        id="taskInput"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={(e) => enterAddTask(e)}
      />
      <button onClick={handleAddTask}>Añadir</button>
    </div>
  );
};

export default TodoInput;
