import { useState } from "react";
import "./NewTodo.css";

export default function NewTodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(message);
    setMessage("");
  }

  const [message, setMessage] = useState("");
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="toggle-complete"></div>
        <input type="text" placeholder="Create a new todo..." value={message} onChange={e => setMessage(e.target.value)} />
      </form>
    </>
  );
}
