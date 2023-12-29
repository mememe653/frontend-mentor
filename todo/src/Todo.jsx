import { useState } from "react";
import "./Todo.css";

export default function Todo({ data, toggleCompleted, deleteTodo }) {
  return (
    <div className="todo">
      <button className={data.completed ? "toggle-complete completed" : "toggle-complete"} onClick={() => toggleCompleted(data.id)}></button>
      <span className={data.completed ? "completed" : ""}>{data.message}</span>
      <button className="delete" onClick={() => deleteTodo(data.id)}></button>
    </div>
  );
}
