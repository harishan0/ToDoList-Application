import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a Shower",
    "Walk the Dog",
  ]);
  const [newTask, setNewTasks] = useState("");

  const handleInputChange = (event) => {
    setNewTasks(event.target.value);
  };
  const addTask = () => {};
  const deleteTask = (index) => {};
  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};

  console.log(tasks);
  return (
    <div className="ToDoList">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          className="todo-input"
          value={newTask}
          placeholder="What is the task today?"
          onChange={handleInputChange}
        />
        <button type="submit" className="todo-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-btn" onClick={()=> moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
