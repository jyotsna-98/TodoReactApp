import React from "react";
import "./Todo.css";
function ToDo(props){
    return(
        <div className="todo">
            <h2>{props.title}</h2>
             <button
            className="btn btn-danger deleteBtn"
            value={props.value}
            onClick={props.deleteToDo}>DELETE</button>
        </div>
    );
}
export default ToDo;