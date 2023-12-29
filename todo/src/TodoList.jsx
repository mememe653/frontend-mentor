import { useState } from "react";
import TodoListView from "./TodoListView.jsx";
import Todo from "./Todo.jsx";
import "./TodoList.css";

export default function TodoList({ todos, toggleCompleted, deleteTodo, clearCompleted }) {
  const [visibility, setVisibility] = useState("all");

  let todoItems;
  switch (visibility) {
    case "active":
      todoItems = todos.filter(todo => !todo.completed).map(todo => <li><Todo data={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} /></li>);
      break;
    case "completed":
      todoItems = todos.filter(todo => todo.completed).map(todo => <li><Todo data={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} /></li>);
      break;
    default:
      todoItems = todos.map(todo => <li><Todo data={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} /></li>);
  }
  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <div className="todo-list">
        <ul>{todoItems}</ul>
        <div className="summary-container">
          <span className="summary">{itemsLeft} items left</span>
          <button className="clear-completed" onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
      <TodoListView setVisibility={setVisibility} />
    </>
  );
}
