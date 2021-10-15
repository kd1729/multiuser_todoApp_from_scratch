const TODOS = (props) => {
  return (
    <div className="displayTODO">
      <div
        className="displayNewTODO"
        style={{
          textDecoration: props.checked ? "line-through" : "none",
        }}
      >
        {props.val}
      </div>
      <button className="myBtn" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
      <button className="myBtn" onClick={() => props.onDone(props.val)}>
        Mark As Done
      </button>
    </div>
  );

};


export default TODOS;
