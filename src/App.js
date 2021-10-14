import React, { useState } from "react";
import CreateTODO from "./Components/CreateTODO";
import TODOS from "./Components/TODOS";


function App() {
  const [TODO, setTODO] = useState([]);

  function AddTODO(newTODO) {
    setTODO( prev => {
      return [...prev, newTODO];
    });
  }

  function DeleteTODO(idx) {
    setTODO( prev => {
      return prev.filter((item, id) => {
        return id !== idx;
      });
    });
  }

  const MarkTODO = (idx, done) => {
    console.log(idx)
    setTODO(TODO.map((t,id) => id === idx
    ? {...t, checked: !t.checked  } : t)
    )
  }

  return (
    <>
      <CreateTODO onAdd={AddTODO} />

      {TODO.map((t, idx) => {
        return (
          <TODOS
            id={idx}
            key={idx}
            val={t.content}
            onDelete={DeleteTODO}
            onDone={MarkTODO}
            checked
          />
        );
      })}

    </>
  );
}
export default App;
