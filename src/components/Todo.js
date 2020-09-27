import React from "react";
import "./mainContent.css";

function Todo(props) {
  return (
    <div id="items-list">
      <h3 className="col-md-8">Todo: {props.todo}</h3>
      <input
        id="check"
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo)}
      ></input>
      <button
        id="delete-button"
        variant="danger"
        type="button"
        onClick={() => props.handleDelete(props.todo)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
