import React, { use } from 'react'
import { useState ,useEffect} from 'react'
import { jsxs } from 'react/jsx-runtime'
import './TaskManager.css'
import './TaskManager.css'

export default function TaskManager() {
    const [task,setTask]=useState("")
    const [tasks,setTasks]=useState(()=>{
        const saved=localStorage.getItem("tasks")
        return saved ? JSON.parse(saved):[]
     })
    function AddTask(){
        if (task===""){
            return
        }else{
            setTasks([...tasks,task])
            setTask("")

        }
    }
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
  return (
    <div className="task-manager">
    <input type="text" placeholder='enter task' value={task} onChange={(v)=>setTask(v.target.value)} className="task-input"/>
    <button onClick={AddTask} className="add-task-btn">Add Tasks</button>
    <ul className="task-list">
        {tasks.map((e,i)=>{
           return <li key={i} className="task-item">{e}</li>
        })}
    </ul>
    </div>
  )
}
