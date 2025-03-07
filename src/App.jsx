import { useState, useEffect } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function App() {
  // Todo List State //
  const [todos, setTodos] = useState([
    "Go to College",
    "Eat Healthy",
    "Medidate to keep BP low"
  ]);

  // To manage the Input through the dialogue box we manage a new state //
  const [todoValue, setTodoValue] = useState("")

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handleTodos(newTodo) {
    // Adding the new entered Item into the old Todo List //
    const newTodoList = [...todos, newTodo];

    // On Loading the website, the data is set initially //
    persistData(newTodoList)

    // Modifying the TodoList
    setTodos(newTodoList);
  }

  function deleteTodo(index) {
    // Creating the new List based after deleting //
    const newTodoList = todos.filter((todo, todoIndex) => {
      // All other todos except for the selected todos return true value //
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function editTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    // handleTodos(valueToBeEdited)
    deleteTodo(index)
  }

  useEffect(() =>{
    if (!localStorage) // Checks if LocalStorage exists //
      return 

    else
    {
      let localTodos = localStorage.getItem('todos'); // We have to set item manually //

      if(localTodos) // Checks if LocalStorage has data //
      {
        localTodos = JSON.parse(localTodos).todos;

        setTodos(localTodos);
      }
      else
        return;
    } // End of else
  },[])
  return (
    <>
     {/* Enter Todo  */}
      <TodoInput
        todoValue={todoValue}
        handleTodos={handleTodos}
        setTodoValue={setTodoValue}>
      </TodoInput>

     {/* Todo List display and Management */}
      <TodoList 
       deleteTodo={deleteTodo} 
       editTodo={editTodo}
       todos={todos}></TodoList>
    </>
  )
}

export default App;
