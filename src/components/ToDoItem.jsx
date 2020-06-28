import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;

// tu onClick musí volať funkciu a až z nej props.onChecked(props.id), pretožýe ak sú zátvorky za fumkciou, znamená to, že ju bude volať a volá ju pri každom renderi resp. pri prechode kódom aj bez skutočného kliknutia; takto ju bude volať až po skutočnom stlačení onClick; predtým bol "executed on render"
