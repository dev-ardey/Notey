import { ToDoItem } from "./ToDoItem"

const introduction = <p>✧ Welcome to Daily Mind Bendy <br></br> <br></br> Write down one thing you did better today than yesterday! <br></br> <br></br>After 100 entries, order a book with your daily improvements. It's a reminder of your progress, especially during tough days.<br></br> <br></br> Just flip and see your growth, staying motivated to do better every day."</p>

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && introduction }
            {todos.map(todo => {
                return <ToDoItem
                    {...todo} key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />

            })}


        </ul>
    )
}