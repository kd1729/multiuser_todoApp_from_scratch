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
      return prev.filter(item => {
        return item.id !== idx;
      });
    });
  }


  const checkHandler = id => {
    setTODO(
      TODO.map(t => {
        if (t.id === id)
          t.checked = !t.checked;
        return t;
      }),
    );
  };

  return (
    <>
      <CreateTODO onAdd={AddTODO} />

      {TODO.map(t => {
        return (
          <TODOS
            id={t.id}
            key={t.id}
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
