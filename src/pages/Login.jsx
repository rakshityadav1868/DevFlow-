import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function login() {
    const navigate= useNavigate();
    function handleClick(){
       navigate("/dashboard")
    }
  return (
    <>
    <h1>DevFlow Login</h1>
    <button onClick={handleClick}>click me</button>
    </>
  )
}
