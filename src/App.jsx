// omdat dit een oudere? versie van react is moet ik useState zelf importen
import React, { useState } from "react";
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        },
      ]
    })

    setNewItem("")
  }

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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Mindbend List</h1>
      <ul className="list">
        {todos.length === 0 && "No mindbends"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}

                  // onChange event listener, it is calling the toggleTodo function, and pass along wether or not it is checked
                  onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}


      </ul>
    </>
  )
}