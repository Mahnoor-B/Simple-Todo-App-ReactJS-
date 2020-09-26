import React from "react";

function AddItem(props) {
  return (
    <div>
          <form typeof="submit" onSubmit={props.handleItem}>
              <p>Value:{props.val}</p>
        <input type="text" placeholder="Add new item" ref={props.refe}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
