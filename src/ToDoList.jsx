import { ToDoItem } from "./ToDoItem";
import React, { useState } from "react";

const introduction = (
    <p>
        ✧ Welcome to Notey! <br></br> <br></br> Write down one thing you did better today than yesterday! <br></br> <br></br>After 100 entries, order a book with your daily improvements. It's a reminder of your progress, especially during tough days.<br></br> <br></br> Just flip through and see your growth, staying motivated to do better every day.
    </p>
);

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);



    // Function to handle the submission of the email form
    const handleEmailSubmit = (event) => {
        event.preventDefault();
        // Your email handling logic here...
        const email = event.target.email.value;
        console.log('Email submitted:', email);
        // Reset the state to hide the email form
        setShowEmailForm(false);
        setButtonClicked(true);
        // Reset button animation after 2 seconds
        setTimeout(() => setButtonClicked(false), 2000);

    };

    return (
        <div>
            {/* Show the introduction */}
            {introduction}

            {/* Show the mini div with email form when there are 15 list items */}
            {todos.length === 15 && !showEmailForm && (
                <div className="mini-div">
                    <p>Enter email for your <br></br> book customisation</p>
                    <form onSubmit={handleEmailSubmit}>
                        <input id="email" type="email" name="email" placeholder="Enter your email" />
                        <button type="submit" className={buttonClicked ? "clicked" : ""}>
                            {buttonClicked ? "Sent!" : "Send"}
                        </button>
                    </form>
                </div>
            )}

            <ul className="list">
                {/* Render each ToDoItem */}
                {todos.map((todo) => (
                    <ToDoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}
