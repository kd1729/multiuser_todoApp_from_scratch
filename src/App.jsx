import React, { useState, useEffect } from "react";
import CreateTODO from "./Components/CreateTODO";
import TODOS from "./Components/TODOS";
import { db } from "./Components/Firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";

function App(props) {
  const usersRef = collection(db, "users");
  const user = doc(usersRef, props.id);

  const [TODO, setTODO] = useState([]);

  useEffect(() => {
    getDoc(user).then((doc) => {
      setTODO(doc.data().todos);
    });
  }, [user]);

  async function AddTODO(newTODO) {
    await updateDoc(user, {
      todos: [...TODO, newTODO],
    });
    // setTODO((prev) => {
    //   return [...prev, newTODO];
    // });
  }

  async function DeleteTODO(idx) {
    await updateDoc(user, {
      todos: [...TODO.filter((element) => element.id !== idx)],
    });
    // setTODO((prev) => {
    //   return prev.filter((item) => {
    //     return item.id !== idx;
    //   });
    // });
  }

  async function checkHandler(id) {
    await updateDoc(user, {
      todos: [
        ...TODO.map((element) => {
          if (element.id === id) {
            return { ...element, checked: !element.checked };
          } else {
            return element;
          }
        }),
      ],
    });
    // setTODO(
    //   TODO.map((t) => {
    //     if (t.id === id) t.checked = !t.checked;
    //     return t;
    //   })
    // );
  }

  async function displayCompleted() {
    await updateDoc(user, {
      todos: [
        ...TODO.map((element) => {
          element.completed = false;
          element.pending = true;
          if (!element.checked) 
            element.pending = false;
          return element;
        }),
      ]
    });
    // setTODO(
    //   TODO.map((t) => {
    //     t.completed = false;
    //     t.pending = true;
    //     if (t.checked === false) t.pending = false;
    //     return t;
    //   })
    // );
  }

  function displayPending() {
    updateDoc(user, {
      todos: [
        ...TODO.map((element) => {
          element.pending = true;
          element.completed = false;
          if (element.checked) 
            element.completed = true;
          return element;
        }),
      ]
    });
    // setTODO(
    //   TODO.map((t) => {
    //     t.completed = false;
    //     t.pending = true;
    //     if (t.checked === true) t.completed = true;
    //     return t;
    //   })
    // );
  }

  async function displayAll() {
   await updateDoc(user, {
      todos: [
        ...TODO.map((element) => {
          element.pending = true;
          element.completed = false;
          return element;
        }),
      ]
    });
    // setTODO(
    //   TODO.map((t) => {
    //     t.completed = false;
    //     t.pending = true;
    //     return t;
    //   })
    // );
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

  function signOut() {
    alert("You have been signed out !");
    window.location.href = "/";
  }

  return (
    <div className="MainDiv">
      <h1>{props.name}</h1>
      {/* <div className="author">
        Made with ❤ by{" "}
        <a href="https://github.com/onlykingKD/multiuser_todoApp_from_scratch">
          @onlykingKD
        </a>
      </div> */}

      <div className="header">
        <h1>Welcome {props.id}</h1>
        <button className="signOut" onClick={signOut}>
          SignOut
        </button>
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
