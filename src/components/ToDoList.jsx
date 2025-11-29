// Receives the array of todos and renders each as a ToDoItem.
import ToDoItem from "./ToDoItem.jsx";

function ToDoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  // If there are no todos, show an "empty state" message
  if (todos.length === 0) {
    return <p className="empty-text">No tasks yet. Add your first task!</p>;
  }

  return (
    <ul className="todo-list">
      {/*.map to convert each todo object into a ToDoItem component */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // key to identify items in the list
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
