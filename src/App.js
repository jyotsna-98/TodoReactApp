import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import ToDo from "./ToDoList";


function App() {
  const[todos,setTodos]=useState([]);
  const[input,setInput]=useState("");
  
  const deleteToDo=(e)=>{
    e.preventDefault();
    let index=e.target.value;
    todos.splice(index,1);
    setTodos([...todos]);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTodos([input,...todos]);
    setInput("");
  };


  return (
    <div className="App">
      <h1> My ToDo App</h1>
      <form>
        <input
          value={input}
          onChange={(e)=>
          setInput(e.target.value)}
          type="text"></input>
       
        <button
         className="btn btn-dark addBtn"
         disabled={!input}
         type="submit"
         onClick={handleSubmit}>  ADD  </button>
      {
      todos.map((todo,index)=> (
        <ToDo
       // key={index}
        value={index}
        title={todo}
        deleteToDo={deleteToDo}
        />

      ))}
      </form>
    </div>
  );
}

export default App;
