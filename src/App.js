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

  function displayCompleted(){
    setTODO(
      TODO.map(t => {
        t.completed = false;
        t.pending = true;
        if (t.checked === false)
          t.pending = false;
        return t;
      }),
    );
  }

  function displayPending(){
    setTODO(
      TODO.map(t => {
        t.completed = false;
        t.pending = true;
        if (t.checked === true)
          t.completed = true;
        return t;
      }),
    );
    
  }

  function displayAll() {
    setTODO(
      TODO.map(t => {
        t.completed = false;
        t.pending = true;
        return t;
      }),
    );
  }


  return (
    <>
      <CreateTODO onAdd={AddTODO} />

      {TODO.map(t => {
        if(TODO.length > 0)
            return (
              <TODOS
                key={t.id}
                id={t.id}
                val={t.content}
                time={t.timeLimit}
                checked={t.checked}
                completed={t.completed}
                pending={t.pending}
                onDelete={DeleteTODO}
                onDone={checkHandler}
              />
            );
        return  <div className="noTodosLeft"> No Todos Left ! </div>;
      })}

      <div className="filter-buttons">
        <button className="displayPending" onClick={displayPending}>Show Pending</button>
        <button className="displayCompleted" onClick={displayCompleted}>Show Completed</button>
        <button className="displayAll" onClick={displayAll}>Show All</button>
      </div>

    </>
  );
}
export default App;
