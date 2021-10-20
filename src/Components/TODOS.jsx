export default function TODOS(props) {
  function MarkAsDone(e) {
    if (e.target.innerText === "Mark As Done")
      e.target.innerText = "Still Not Done";
    else e.target.innerText = "Mark As Done";
    props.onDone(props.id);
  }

  return (
    <div
      className="displayTODO"
      style={{
        display: props.completed || !props.pending ? "none" : "flex",
      }}
    >
      <div
        className="displayNewTODO"
        style={{
          textDecoration: props.checked ? "line-through" : "none",
        }}
      >
        {props.val}
        <div
          className="displayTime"
          style={{
            textDecoration: props.checked ? "line-through" : "none",
          }}
        >
          {props.time}
        </div>
      </div>
      <button className="myBtnDelete" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
      <button
        className="myBtnDone"
        onClick={MarkAsDone}
        style={{
          backgroundColor: props.checked ? "#A03C78" : "#4E9F3D",
        }}
      >
        Mark As Done
      </button>
    </div>
  );
}
