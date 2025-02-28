import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TodoDetails = () => {
  const [todo, setTodo] = useState();
  const params = useParams();
  const location = useLocation();

  console.log(location.state);

  useEffect(() => {
    if (params.id) {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      const selectedTodo = todos.find((todo) => String(todo.id) === params.id);
      setTodo(selectedTodo);
    }
  }, [params]);

  return (
    <div className="d-flex  flex-column justify-content-center align-items-center border border-success rounded  w-50"> 
      {todo ? (
        <>
       
          <h2 className="d-flex justify-content-center align-items-center p-5 text-uppercase ">{todo.title}</h2>
          <p className="d-flex justify-content-center align-items-center  fs-4 ">{todo.description}</p>
        </>
      ) : null}
    </div>
  );
};

export default TodoDetails;
