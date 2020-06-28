import React, { useState } from "react";

function ToDoItem(props) {
  const [decoration, changeDecoration] = useState("");

  function selectItem() {
    if (decoration === "line-through") {
      return changeDecoration("");
    } else {
      return changeDecoration("line-through");
    }
  }

  return (
    <li onClick={selectItem} style={{ textDecorationLine: decoration }}>
      {props.item}
    </li>
  );
}

// possible also to manage with useState true/false only and then apply directly in the inline css as:
// textDecorationLine: state ? "line-through" : none;
// also to set opposite state simply:

// const [state, changeState] = React.useState(false);
// changeState(!state);
// ;)

export default ToDoItem;
