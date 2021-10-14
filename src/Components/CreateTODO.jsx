import React, { useState } from "react";

export default function CreateTODO(props) {

  const [todo, setTODO] = useState({content : "", checked : false});

  function handleChange(e){
    const {name, value} = e.target;
    setTODO(x => {
      return{
        ...todo,
        [name] : value
      };
    });
  }

  function Add(e){
    props.onAdd(todo);
    setTODO({
      content : "", 
      checked : false
    });
  }



  return (
    <div className="createTODO">
      <input
        name = "content"
        value = {todo.content}
        id="createNewTODO"
        className="createNewTODO"
        type="text"
        placeholder="Create a new TODO..."
        onChange = {handleChange}
      />
      <button className="myBtn" onClick={Add}>
        ADD
      </button>
    </div>
  );
}
