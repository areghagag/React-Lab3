import React from "react";
import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import FiltrationTabs from "../components/FiltrationTabs";

const Home = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // @param todo => the data from the child component.
  const addNewTodo = (todo) => {
    const allTodos = [...todos, todo];
    setTodos(allTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredTodos(todos);
    } else if (selectedFilter === "inProgress") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else if (selectedFilter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    }
  }, [selectedFilter, todos]);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="px-5 py-4 mt-5 w-75">
        <h3 className="text-uppercase text-center fw-bold text-success">
          Todo app
        </h3>
        <TodoForm onAddTodo={(todo) => addNewTodo(todo)} />
        {todos.length > 0 ? (
          <>
            <div className="dropdown-divider my-4" />
            <FiltrationTabs
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
            <TodoList
              todos={filteredTodos}
              onTodoDelete={(todoId) => deleteTodo(todoId)}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
