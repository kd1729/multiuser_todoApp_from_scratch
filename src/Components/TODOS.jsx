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
      <button className="myBtnDelete" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
      <button className="myBtnDone" onClick={() => props.onDone(props.id)}>
        Mark As Done
      </button>
    </div>
  );
};

export default TODOS;
