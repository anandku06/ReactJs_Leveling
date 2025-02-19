import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inValue, setInValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inValue.trim()) {
      setTasks([...tasks, inValue.trim()]);
      setInValue("");
    }
  };

  const handleChange = (e) => setInValue(e.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inValue}
          placeholder="Add your task"
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
      <div>
        <ul>
          {tasks.map((task, id) => (
            <li key={id}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
