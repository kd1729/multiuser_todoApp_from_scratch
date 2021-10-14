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

  function MarkTODO(idx) {
    console.log(idx); 
    setTODO(TODO.map(t => t.id === idx  ? { ...t, checked: !t.checked } : t))
    //true false no need, just use negation symbol
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
            checked={t.checked} // new addition
            onDelete={DeleteTODO}
            onDone={MarkTODO}
          />
        );
      })}

    </>
  );
}
export default App;
