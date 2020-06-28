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

export default ToDoItem;
