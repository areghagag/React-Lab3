import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescreption] = useState("");

  const passTodoToApp = () => {
    if (title) {
      props.addNewTodo({
        id: Date.now(),
        title,
        description,
        completed: false,
      });
      setTitle("");
      setDescreption("");
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="title" className="mb-2">
          Enter Todo Title:
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="descreption" className="mb-2">
          Enter Todo Descreption:
        </label>
        <textarea
          type="text"
          rows={6}
          id="descreption"
          className="form-control"
          value={description}
          onChange={(e) => setDescreption(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center ">
        <button
          className="btn btn-success px-5 fs-3 mt-3 mb-4"
          onClick={passTodoToApp}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
