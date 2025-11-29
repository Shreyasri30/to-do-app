# To-Do App (React + Vite)

A simple, modular To-Do List application built using **React with Vite**.  
The app allows users to add tasks, edit existing tasks, delete tasks, and mark tasks as completed.  
It follows a clean component structure and demonstrates core React fundamentals such as **state management**, **props**, **event handling**, **list rendering**, and **controlled components**.

Repository: https://github.com/Shreyasri30/to-do-app

---

## 1. Features

### Core Task Management

#### **Add New Task**
- Users can enter text and add a to-do item.
- Prevents empty submissions.

#### **Edit Task**
- Tasks can be edited in-place.
- Includes **Save** and **Cancel** operations.

#### **Delete Task**
- Removes a selected task from the list.

#### **Mark Task as Completed**
- Toggles completion state visually.

---

## 2. Component Overview

### **App.jsx**
- Main application logic.
- Holds state for tasks.
- Manages add, edit, delete, complete functions.
- Passes props to child components.

### **Header.jsx**
- Displays project title and tagline.

### **ToDoList.jsx**
- Renders list of all tasks.
- Maps through task data and loads `ToDoItem`.

### **ToDoItem.jsx**
- Represents an individual to-do item.
- Handles edit mode, delete button, and completion toggle.

---

## 3. Styling & UI
- Fully custom CSS styling.
- Neon theme.
- Centered layout.
- Smooth spacing, padding, buttons & input styles.
- Responsive and clean design.

---

## 4. Folder Structure

```

src/
│── components/
│   ├── Header.jsx
│   ├── ToDoItem.jsx
│   └── ToDoList.jsx
│
│── styles/
│   └── App.css
│
├── App.jsx
├── main.jsx

````

---

## 5. Technologies Used
- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3** for UI styling

---

## 6. How to Run the App

```bash
# Install dependencies
npm install

# Start development server
npm run dev
````

---

## 7. Purpose of the Project

This project was built as part of the **Internshala Full Stack Developer Program (Module 3 – React)** to demonstrate:

* Component-based architecture
* State and props
* Event handling
* Controlled components
* List rendering
* Clean folder structure
* Git versioning with meaningful commits
