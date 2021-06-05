import React from "react";

function ToDoItem(props) {
  return (
    <div className="each-item"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* <li>{props.text}</li> */}
      <p>{props.text}</p>
      <div className="todo-btn">
        <i class="far fa-edit"></i>
        <i class="far fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default ToDoItem;
