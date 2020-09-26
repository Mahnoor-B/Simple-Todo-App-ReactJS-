import React from "react";

function Todo(props) {
  return (
    <div>
      <h3>Todo: {props.todo.item}</h3>
      <input
        type="checkbox"
        checked={props.todo.item.completed}
        onChange={() => props.handleChange(props.todo.id)}
      ></input>
      <button type="button" onClick={() => props.handleDelete(props.todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
