import React from 'react'

const TodoItem = (props) => {
    const { todo } = props;
     
  return (
    <div className='alert alert-success d-flex justify-content-between align-items-center'>
      <h4>{todo.title}</h4>
      <i className="fa-solid fa-trash fs-4 text-danger"></i>
    </div>
  )
}

export default TodoItem
