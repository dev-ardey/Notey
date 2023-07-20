import { ToDoItem } from "./ToDoItem"


export function ToDoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No mindbends"}
            {todos.map(todo => {
                return <ToDoItem
                    {...todo} key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />

                // {...todo} passes each id as they are
                // id={todo.id}
                // completed={todo.completed}
                // title={todo.title}


            })}


        </ul>
    )
}