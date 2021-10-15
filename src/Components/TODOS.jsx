import React from "react";

  // function Delete() {
  //   props.onDelete(props.id);
  // }

  // function MarkAsDone(e) {
  //   // true false no need
  //   if (e.target.innerText === "Marks As Done")
  //     e.target.innerText = "Still Not Done";
  //   else e.target.innerText = "Marks As Done";
  //   props.onDone(props.id); 
  // }



const TODOS = (props) => {

    const itemCheckHandler = () => {
      props.checkHandler(props.id);
    };


    return (
      <div className="displayTODO">
        {/* <div className={`displayNewTODO  ${props.checked ? "markTODO" : ""}`}> */}
        <div className="displayNewTODO" style={{
            textDecoration: props.checked ? 'line-through' : 'none',
          }}>
          {props.val}
        </div>
        <button className="myBtn" onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
        <button className="myBtn" onClick={itemCheckHandler}>
          Mark As Done
        </button>
      </div>
    );
  
    // return (
    //   <div>
    //     <li
    //       style={{
    //         textDecoration: item.checked ? 'line-through' : 'none',
    //       }}
    //       onClick={itemCheckHandler}
    //     >
    //       {item.text}
    //     </li>
    //   </div>
    // );
        }


  // return (
  //   <div className="displayTODO">
  //     <div className={`displayNewTODO  ${props.checked ? "markTODO" : ""}`}>
  //       {props.val}
  //     </div>
  //     <button className="myBtn" onClick={() => props.onDelete(props.id)}>
  //       Delete
  //     </button>
  //     <button className="myBtn" onClick={() => props.onDone(props.id)}>
  //       Mark As Done
  //     </button>
  //   </div>
  // );

export default TODOS;