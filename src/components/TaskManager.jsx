import React from 'react'
import { useState } from 'react'

export default function TaskManager() {
    const [task,setTask]=useState("")
    const [tasks,setTasks]=useState([])
    function AddTask(){
        if (task===""){
            return
        }else{
            setTasks([...tasks,task])
            setTask("")

        }
    }
  return (
    <>
    <input type="text" placeholder='enter task' value={task} onChange={(v)=>setTask(v.target.value)}/>
    <button onClick={AddTask}>Add Tasks</button>
    <ul>
        {tasks.map((e,i)=>{
           return <li key={i}>{e}</li>
        })}
    </ul>
    </>
    
  )
}
