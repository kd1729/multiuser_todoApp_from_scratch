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


  function checkHandler(id) {
    setTODO(
      TODO.map(t => {
        if (t.id === id)
          t.checked = !t.checked;
        return t;
      }),
    );
  };

  function displayPending() {
    setTODO(
      TODO.map(t => {
        return t.checked ? t : null;
      }),
    );
  }

  function displayCompleted() {
    setTODO(
      TODO.map(t => {
        return !t.checked ? t : null;
      }),
    );
  }

  function displayAll() {
    setTODO(
      TODO.map(t => {
        return t;
      }),
    );
  }

  return (
    <>
      <CreateTODO onAdd={AddTODO} />

      {TODO.map(t => {
        return (
          <TODOS
            id={t.id}
            key={t.id}
            val={t.content}
            time={t.timeLimit}
            checked={t.checked}
            onDelete={DeleteTODO}
            onDone={checkHandler}
          />
        );
      })}

      <button className="displayPending" onClick={displayPending}>Show Pending</button>
      <button className="displayCompleted" onClick={displayCompleted}>Show Completed</button>
      <button className="displayAll" onClick={displayAll}>Show All</button>


    </>
  );
}
export default App;
