import React, { Children } from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  // Todo List is not given at components level cause two same level components will use it //

  // We provide the Todo List one level higher //
  const { todos } = props
  // const {deleteTodo} = props 
  // we want the deleteTodo functionality directly inside the TodoCard // 
  return (
    <ul className="main">
      {
        todos.map(
          function todoDisplay(todo, todoIndex) // Function to render List
          {
            return (
              <TodoCard
                {...props}
                key={todoIndex}
                index={todoIndex}>
                  {todo}
                {console.log("Inside List")}
              </TodoCard>
            )
          } // End of Function
        )// End of Map
      }
    </ul>
  )
}
