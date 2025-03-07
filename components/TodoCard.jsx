import React from 'react'

export default function TodoCard(props) {
  const { children, deleteTodo, index, editTodo } = props
  return (
    <div>
      <li className="todoItem">
        {/* {todo} */}
        {children} {/* Child Todo gets rendered */}
        {console.log("Inside Card")}

        <div className="actionsContainer">
          {/* Edit Icon */}
          <button onClick={() => {
            editTodo(index)
          }}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>

          {/* Delete Icon */}
          <button onClick={() => {
            deleteTodo(index)
          }}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li></div>
  )
}
