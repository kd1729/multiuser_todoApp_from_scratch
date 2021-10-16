import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory()

  const goBack =() => {
    history.goBack()
  }

  function checkHandler(id){
    setTODO(
      TODO.map(t => {
        if (t.id === id)
          t.checked = !t.checked;
        return t;
      }),
    );
  };

  function displayPending(){
    setTODO(TODO.filter((t) => t.checked === false))
     
  }

  function displayCompleted(){
    goBack();
    setTODO(TODO.filter((t) => t.checked === true))
  }

  function displayAll(){

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

      <div className="filter-buttons">
        <button className="displayPending" onClick={displayPending}>Show Pending</button>
        <button className="displayAll" onClick={displayAll}>Show All</button>
        <button className="displayCompleted" onClick={displayCompleted}>Show Completed</button>
      </div>
      


    </>
  );
}
export default App;
