import React, { useState } from "react";
import CreateTODO from "./Components/CreateTODO";
import TODOS from "./Components/TODOS";


function App() {
  const [TODO, setTODO] = useState([]);

  function AddTODO(newTODO) {
    setTODO(prev => {
      return [...prev, newTODO];
    });
  }

  function DeleteTODO(idx) {
    setTODO(prev => {
      return prev.filter((item, id) => {
        return id !== idx;
      });
    });
  }


  const checkHandler = val => {
    setTODO (
      TODO.map (t => {
        if (t.content === val)
          t.checked = !t.checked;
        return t;
      }),
    );
  };

  return (
    <>
      <CreateTODO onAdd={AddTODO} />

      {TODO.map((t, idx) => {
        return (
          <TODOS
            id={idx}
            key={idx}
            val={t.content} 
            checked={t.checked} // new addition
            onDelete={DeleteTODO}
            onDone={checkHandler}
          />
        );
      })}

    </>
  );
}
export default App;
