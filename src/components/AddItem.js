import React from "react";
import "./add.css";

function AddItem(props) {
  return (
    <div>
      <form id="add-form" typeof="submit" onSubmit={props.handleSubmit}>
        {/* // <p>Value:{props.val}</p> */}
        <input
          id="input-text"
          type="text"
          placeholder="Add new item"
          ref={props.refe}
          onChange={props.handleItem}
        ></input>
        <input id="button-submit" type="submit"></input>
      </form>
    </div>
  );
}

export default AddItem;
