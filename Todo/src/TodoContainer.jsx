import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

const TodoContainer = () => {
  const [taskList, setTaskList] = useState([]);
  const [name, setName] = useState("");

  const handleCheck = (taskChecked) => {
    setTaskList(
      taskList.map((task) => {
        if (task == taskChecked) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };
  const handleDelete = (taskL) => {
    setTaskList(taskList.filter((task) => task.id !== taskL.id));
  };
  const handleSubmit = (name) => {
    if (name == "") {
      alert("Enter a proper name for the task");
      return;
    }
    taskList.filter((task) => {
      if (task.name == name) {
        alert(
          "Enter a new name for the task. You have already used this name for a previous task"
        );
        return;
      }
    });
    const task = {
      name: name,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTaskList([...taskList, task]);
    setName("");
  };
  return (
    <div className="todo-form">
      <div className="form-input">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search for a Task..."
            className="input-task"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="add-task">
          <button className="add-button" onClick={() => handleSubmit(name)}>
            Add Task
          </button>
        </div>
      </div>
      <div className="todos">
        {taskList.map((task) => (
          <Todo
            task={task}
            key={task.id}
            click={() => handleDelete(task)}
            check={() => handleCheck(task)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
