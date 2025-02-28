import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onTodoDelete }) => {

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}  onTodoDelete={onTodoDelete} />
      ))}
    </>
  );
};
export default TodoList
