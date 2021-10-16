import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function CreateTODO(props) {
  const [todo, setTODO] = useState({
    id: nanoid(),
    content: "",
    timeLimit: "",
    completed: false,
    pending: true,
    checked: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTODO((x) => {
      return {
        ...todo,
        [name]: value,
      };
    });
  }

  function Add(e) {
    props.onAdd(todo);
    setTODO({
      content: "",
      checked: false,
      completed: false,
      pending: true,
      timeLimit: "",
      id: nanoid(),
    });
  }

  return (
    <div className="createTODO">
      <input
        name="content"
        value={todo.content}
        id="createNewTODO"
        className="createNewTODO"
        type="text"
        placeholder="Create a new TODO..."
        onChange={handleChange}
      />
      <input
        name="timeLimit"
        value={todo.timeLimit}
        id="timeLimit"
        className="timeLimit"
        type="text"
        placeholder="Enter deadline"
        onChange={handleChange}
      />
      <button className="myBtnAdd" onClick={Add}>
        ADD
      </button>
    </div>
  );
}
