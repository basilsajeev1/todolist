import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [toDos,settoDos]=useState([])
  let [task,setTask]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <i className="fas fa-plus" onClick={()=>{settoDos([...toDos,task])}}></i>
      </div>
      {toDos.map((value)=>{
        return(

      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
        )
      })
     }
    </div>
  );
}

export default App;