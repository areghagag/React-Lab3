import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";


function App() {
  const [todos, setTodos] = useState([]);
  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="todo-details/:id" element={<TodoDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
