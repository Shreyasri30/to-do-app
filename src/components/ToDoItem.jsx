import { useState } from "react";

function ToDoItem({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) {
  // Local state to track whether this item is in "edit mode"
  const [isEditing, setIsEditing] = useState(false);

  // Local state to store the edited text while the user is typing
  const [editText, setEditText] = useState(todo.text);

  // Called when the user clicks "Save"
  const handleSave = () => {
    onEditTodo(todo.id, editText); // inform parent about the new text
    setIsEditing(false); // exit edit mode
  };

  // Called when the user clicks "Cancel"
  const handleCancel = () => {
    setEditText(todo.text); // reset to original text
    setIsEditing(false); // exit edit mode
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="left-part">
        {/* Checkbox to mark todo as completed or not */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />

        {/* show normal text if not editting; else show input box while editting*/}
        {!isEditing ? (
          <span className="todo-text">{todo.text}</span>
        ) : (
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        )}
      </div>

      <div className="actions">
        {/*show the Edit button when not editting*/}
        {!isEditing ? (
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          // show Save and Cancel buttons when editting
          <>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-danger" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}

        {/* Delete button always shown */}
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
