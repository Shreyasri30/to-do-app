React To-Do List Application (Vite + React)

This project is a simple and functional To-Do List application built using React and Vite.
The application demonstrates core React concepts such as components, props, state management, event handling, conditional rendering, and list rendering.

Repository Link

GitHub Repository:
https://github.com/Shreyasri30/to-do-app

1. Project Structure
src/
  App.jsx
  main.jsx
  components/
    Header.jsx
    ToDoList.jsx
    ToDoItem.jsx
  styles/
    App.css

2. Features
2.1 Add Tasks

Users can create new tasks using an input field and an Add button.

2.2 Edit Tasks

Existing tasks can be edited using an Edit button and updated with Save or Cancel options.

2.3 Delete Tasks

Tasks can be removed from the list permanently.

2.4 Mark as Completed

A checkbox allows the user to mark any task as completed. Completed tasks visually change style.

2.5 React State Management

All task operations update the UI instantly using the useState hook.

2.6 Props and Component Communication

Functions such as add, edit, delete, and toggle complete are passed from parent to child components using props.

2.7 List Rendering

Tasks are rendered using the map() function with unique keys.

2.8 Custom Styling

The project uses a neon-themed UI created entirely using CSS inside App.css.

3. Component Overview
3.1 App.jsx

Holds the global state (todos).

Contains logic for adding, deleting, editing, and toggling tasks.

Passes all relevant data and functions to child components via props.

3.2 Header.jsx

Displays the application title and subtitle.

Contains no state or logic.

3.3 ToDoList.jsx

Receives the todo list from App.jsx via props.

Renders each task using the ToDoItem component.

Shows a fallback message when the list is empty.

3.4 ToDoItem.jsx

Represents a single task row.

Handles editing mode, save/cancel flow, and delete action.

Uses local state to manage temporary edited text.

4. Installation and Setup
Step 1: Install dependencies
npm install

Step 2: Start the development server
npm run dev

Step 3: Open in browser

Launch the URL shown in the terminal (typically http://localhost:5173).

5. Technologies Used

React (Functional Components and Hooks)

Vite (Development server and bundler)

JavaScript (ES6+)

CSS3

6. Usage Instructions

Type a task into the input field.

Press Add to create a new task.

Check the checkbox to mark as completed.

Press Edit to modify a task.

Press Save or Cancel to exit editing mode.

Press Delete to remove a task.

7. Purpose of the Project

This project is built as part of the Internshala Full Stack Developer program (Module 3 – React) to demonstrate understanding of:

Component-based architecture

State and props

Event handling

UI styling and layout

Clean folder structure

Git versioning with multiple meaningful commits