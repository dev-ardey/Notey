// omdat dit een oudere? versie van react is moet ik useState zelf importen
import React, { useState, useEffect } from "react";
import "./styles.css"
import { NewTodoForm } from "./newTodoForm";
import { ToDoList } from "./ToDoList";


export default function App() {

  // const [todos, setTodos] = useState([])
  // check for stored todos and return them 
  const [todos, setTodos] = useState(
    () => {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    }
  );

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
    })
  }

  // store data local 
  useEffect(
    () => {
      // Store todos in Local Storage whenever the todos state changes
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        // what todo 
        if (todo.id === id) {
          // return new updated version
          return { ...todo, completed }
        }

        // return current todo. as is
        return todo
      })
    })
  }

  function deleteTodo(id) {
    //use al currentTodos
    setTodos(currentTodos => {
      //filter all todos exept for the one i want to remove
      // so only all other todos are returned
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // console.log(todos)

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <div className="list-container">
      <h1 className="header">Mindbend List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}







