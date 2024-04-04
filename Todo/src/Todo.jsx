import React, { useState } from "react";
import "./App.css";

const Todo = ({ task, click, check }) => {
  return (
    <div className="todo-box" id={task.id}>
      <div className="todo-item">
        <input type="checkbox" checked={task.completed} onChange={check} />
      </div>
      <div className="todo-item-text">
        <h2>{task.name}</h2>
      </div>
      <div className="todo-item-del">
        <button className="del-button" onClick={click}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
