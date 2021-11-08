import React, { useState, useEffect } from "react";
import CreateTODO from "./Components/CreateTODO";
import TODOS from "./Components/TODOS";
import { db } from "./Components/Firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
// import { deleteDoc, deleteField, query, where, getDocs } from "firebase/firestore";

function App(props) {
  const usersRef = collection(db, "users");
  const user = doc(usersRef, props.id);
  

  const [TODO, setTODO] = useState([]);

  useEffect(() => {
    getDoc(user).then((doc) => {
      setTODO(doc.data().todos);
    });
  });

  async function AddTODO(newTODO) {
    await updateDoc(user, {
      todos: [...TODO, newTODO],
    });
    setTODO((prev) => {
      return [...prev, newTODO];
    });
  }

  async function DeleteTODO(idx) {
    await updateDoc(user, {
      todos: [...TODO.filter((element) => element.id !== idx)],
    });
    setTODO((prev) => {
      return prev.filter((item) => {
        return item.id !== idx;
      });
    });
  }

  function checkHandler(id) {
    setTODO(
      TODO.map((t) => {
        if (t.id === id) t.checked = !t.checked;
        return t;
      })
    );
  }

  function displayCompleted() {
    setTODO(
      TODO.map((t) => {
        t.completed = false;
        t.pending = true;
        if (t.checked === false) t.pending = false;
        return t;
      })
    );
  }

  function displayPending() {
    setTODO(
      TODO.map((t) => {
        t.completed = false;
        t.pending = true;
        if (t.checked === true) t.completed = true;
        return t;
      })
    );
  }

  function displayAll() {
    setTODO(
      TODO.map((t) => {
        t.completed = false;
        t.pending = true;
        return t;
      })
    );
  }

  async function deleteCompleted() {
    await updateDoc(user, {
      todos: [...TODO.filter((element) => element.checked === false)],
    });
    setTODO((prev) => {
      return prev.filter((item) => {
        return item.checked === false;
      });
    });
  }

  return (
    <div className="MainDiv">
      <h1>{props.name}</h1>
      <div className="author">
        Made with ❤ by{" "}
        <a href="https://github.com/onlykingKD/todoApp-FrontEndMentor">
          @onlykingKD
        </a>
      </div>

      <CreateTODO onAdd={AddTODO} />

      {TODO.length === 0 ? (
        <div className="noTodosLeft"> No Todos Left ! </div>
      ) : null}

      {TODO.map((t) => {
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
      })}

      <div className="filter-buttons">
        <button className="displayPending" onClick={displayPending}>
          Show Pending
        </button>
        <button className="displayCompleted" onClick={displayCompleted}>
          Show Completed
        </button>
        <button className="displayAll" onClick={displayAll}>
          Show All
        </button>
        <button className="deleteCompleted" onClick={deleteCompleted}>
          Delete Completed
        </button>
      </div>
    </div>
  );
}
export default App;
