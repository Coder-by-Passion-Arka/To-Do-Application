import React from "react"
import { useState } from "react";
const TodoInput = function TodoInput(props) {
  const { handleTodos, todoValue, setTodoValue } = props;
  
  return (
    <header className="todo-input">
      <input type="text"
        placeholder="Enter Todo..."
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value)
          console.log(`${event.target.value}`)
        }} />

      <button onClick={() => {
        // Adding item to Todo List //
        handleTodos(todoValue)
        //Claring the DIalogue Box empty after adding item to the List //
        setTodoValue("") 
      }}>Add(+)</button>
    </header> 
  );
}

export default TodoInput;