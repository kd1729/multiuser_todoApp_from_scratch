import React from "react";

export default function TODOS(props) {
  function Delete() {
    props.onDelete(props.id);
  }

  function MarkAsDone(e) {
    if (e.target.innerText === "Marks As Done") {
      props.onDone(props.id, true);
      e.target.innerText = "Still Not Done";
    } else {
      props.onDone(props.id, false);
      e.target.innerText = "Marks As Done";
    }
  }

  return (
    <div className="displayTODO">
      <div className={`displayNewTODO  ${props.checked ? "markTODO" : ""}`}>
        {props.val}
      </div>
      <button className="myBtn" onClick={Delete}>
        Delete
      </button>
      <button className="myBtn" onClick={MarkAsDone}>
        Mark As Done
      </button>
    </div>
  );
}
