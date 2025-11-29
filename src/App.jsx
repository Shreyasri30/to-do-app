// Main component of the application.
import { useState } from "react";
import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "./styles/App.css";

function App() {
  // State to store all todo items.
  const [todos, setTodos] = useState([]);

  // State for the text input where we type a new task.
  const [newTodo, setNewTodo] = useState("");

  // Handler for form submit (Add button).
  const handleAddTodo = (e) => {
    e.preventDefault(); // stop page refresh

    const trimmed = newTodo.trim();
    if (!trimmed) return; // ignore empty input

    // Create a new todo object
    const newItem = {
      id: Date.now(), // unique id based on current time
      text: trimmed,
      completed: false,
    };

    // Add new todo to the existing list
    setTodos((prev) => [...prev, newItem]);

    // Clear the input after adding
    setNewTodo("");
  };

  // Toggle completed status for a todo (checkbox click)
  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } // flip completed flag
          : todo
      )
    );
  };

  // Delete a todo completely from the list
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Update the text of an existing todo (Edit and Save)
  const handleEditTodo = (id, newText) => {
    const trimmed = newText.trim();
    if (!trimmed) return; // ignore empty edits

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: trimmed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      {/* App heading section */}
      <Header />

      <main className="todo-main">
        {/* Form to add a new task */}
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // keep input in sync with state
            className="todo-input"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>

        {/* Todo list section: sends state and handler functions as props */}
        <ToDoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
        />
      </main>
    </div>
  );
}

export default App;
