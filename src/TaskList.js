import React from "react";

function TaskList({ tasks, message }) {
  let content;
  if (tasks.length === 0) {
    content = <p>No tasks yet!</p>;
  } else {
    const taskItems = [];
    for (let i = 0; i < tasks.length; i++) {
    taskItems.push(<li key={i}>{tasks[i]}</li>);
    }
    content = <ul>{taskItems}</ul>;
  }
  return (
    <div className="card p-4 shadow-sm">
    <h4 className="mb-3 text-success">Tasks</h4>
    {content}
    <p className="mt-3 text-primary">{message}</p>
    </div>
  );
}
export default TaskList;
