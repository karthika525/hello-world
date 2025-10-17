import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  function handleChange(e) {
    setTaskName(e.target.value);
  }

  function handleAddTask(e) {
  e.preventDefault();
    if (taskName.trim() === "") {
      return;
    } else {
      const newTasks = tasks.concat(taskName);
      setTasks(newTasks);
      setMessage("Task added: " + taskName +"!");
      setBgColor("lightblue");
      setTaskName("");
    }
  }

return (
<div className="App container mt-5 p-4" style={{ backgroundColor:bgColor, borderRadius:"12px" }}>
<div className="card p-4 mb-4 shadow-sm">
<h2 className="text-center mb-3 text-success">React Task Planner</h2>
<form onSubmit={handleAddTask} className="d-flex">
<input type="text" className="form-control me-2" placeholder="Enter a task" value={taskName} onChange={handleChange}/>
<button type="submit" className="btn btn-primary">Add Task</button>
</form>
</div>
<TaskList tasks={tasks} message={message} />
</div>
  );
}

export default App; 

