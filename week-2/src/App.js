import React, { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Task ${tasks.length + 1}`,
      description: "This is a new task.",
    };
    setTasks([...tasks, newTask]);
  };

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Interactive Task Manager</h1>
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
