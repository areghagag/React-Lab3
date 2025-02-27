import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className=" px-4 py-3 mt-5 w-75 ">
        <h3 className="text-uppercase mt-5 text-center fw-bold text-success">
          Todo App
        </h3>
        <TodoForm addNewTodo={addNewTodo} />

        {todos.length > 0 ? (
          <>
           
            <TodoList todos={todos} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
