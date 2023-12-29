import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx";
import NewTodo from "./NewTodo.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  function addTodo(todoMessage) {
    setTodos([...todos, { id: id, message: todoMessage, completed: false }]);
      setId(id + 1);
  }

    function deleteTodo(id) {
        setTodos([...todos.filter(todo => todo.id !== id)]);
    }

    function toggleCompleted(id) {
        let newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    function clearCompleted() {
        setTodos([...todos.filter(todo => !todo.completed)]);
    }

  const [todos, setTodos] = useState([]);  
    const [visibility, setVisibility] = useState("all");
    const [id, setId] = useState(0);

  return (
    <main>
      <Header />
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} clearCompleted={clearCompleted} show={visibility} />
    </main>
  )
}

export default App
