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
        <i className="fas fa-plus" onClick={()=>{settoDos([...toDos,{id:Date.now(), text:task}])}}></i>
      </div>
      {toDos.map((obj)=>{
        return(

      <div className="todos">
        <div className="todo">
          <div className="left">
            
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              console.log(e.target.id)
              console.log(obj.id)
              let index= toDos.findIndex(obj=>{return obj.id==e.target.id})
              console.log(index)
              if (index !== -1) {
                toDos.splice(index, 1);
                settoDos([...toDos]);
              }
            }}></i>
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