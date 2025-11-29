To-Do App (React + Vite)

A simple, modular To-Do List application built using React with Vite.
The app allows users to add tasks, edit existing tasks, delete tasks, and mark tasks as completed.
It follows a clean component structure and demonstrates core React fundamentals such as state management, props, event handling, list rendering, and controlled components.

Repository: https://github.com/Shreyasri30/to-do-app

1. Features
Core Task Management

Add New Task

Users can enter text and add a to-do item.

Prevents empty submissions.

Edit Task

Tasks can be edited in-place.

Includes Save and Cancel operations.

Delete Task

Removes a selected task from the list.

Mark Task as Completed

A checkbox toggles the completed state.

Completed tasks show a visual change.

UI / UX

Custom neon-themed UI built with pure CSS.

Responsive layout suitable for small screens.

Clean task cards with update and delete controls.

Error-free interaction flow.

2. Component Structure

The project is divided into reusable components inside the src folder.

src/
├─ components/
│  ├─ Header.jsx
│  ├─ ToDoItem.jsx
│  └─ ToDoList.jsx
├─ styles/
│  └─ App.css
├─ App.jsx
├─ main.jsx

Component Breakdown

Header.jsx

Displays the title and subtitle of the app.

Purely presentational.

ToDoList.jsx

Receives the list of todos via props.

Maps each todo to a ToDoItem component.

Displays a fallback message when the list is empty.

ToDoItem.jsx

Represents a single to-do entry.

Manages editing mode using internal state.

Handles edit, save, cancel, delete, and complete operations.

App.jsx

Acts as the main container.

Handles global state using useState.

Implements all task-related logic.

Passes data and functions to child components.

3. State Management

State is handled using React’s useState hook.

Global State in App.jsx:

todos → Array of task objects ({ id, text, completed })

newTodo → Input field text

Event Handlers Implemented:

handleAddTodo

handleEditTodo

handleDeleteTodo

handleToggleTodo

These handlers are passed as props to child components for interaction.

4. List Rendering & Keys

Tasks are rendered using .map() inside ToDoList.jsx.

Each task uses a unique id (generated using timestamp) for React keys.

Ensures stable rendering and efficient updating.

5. Styling

All styling is handled in:

src/styles/App.css


Includes:

Main container styling

Responsive layout

Button and input styling

Completed task visual indicators

Neon color theme with contrast for readability

6. Installation & Setup
Step 1: Install dependencies
npm install

Step 2: Run the development server
npm run dev

Step 3: Open the application
http://localhost:5173

7. Tech Stack

React 18

Vite

JavaScript (ES6+)

CSS3

No external UI libraries used — styling is custom-built.

8. Purpose of the Project

This project was built as part of the Internshala Full Stack Developer Program (Module 3 – React).
It demonstrates:

Component-based architecture

Controlled components

State and props

Event delegation

Structured folder organization

Clean and modular coding practice

Git versioning with multiple meaningful commits

9. Repository

GitHub Repository:
https://github.com/Shreyasri30/to-do-app