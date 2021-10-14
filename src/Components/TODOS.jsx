import React from "react";

export default function TODOS(props) {
  
  function Delete() {
    props.onDelete(props.id);
  }

  function MarkAsDone(e) {
    // true false no need
    if (e.target.innerText === "Marks As Done")
      e.target.innerText = "Still Not Done";
    else e.target.innerText = "Marks As Done";
    props.onDone(props.id); 
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
