import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const { todos } = props;
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
export default TodoList
