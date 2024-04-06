import React,{useState} from 'react'
import './App.css'
const Count =()=>
{
    let [Name,SetName]=useState(0)
    const fun1 =()=>
    {
        SetName(Name+1)
    }
    return (
        <div>
            <h1>Adity</h1>
            <h2>Singh</h2>
            <button onClick={fun1}click></button>
        </div>
    )
}
export  default Count