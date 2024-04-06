import React,{useState}from 'react'
const Clock =()=>
{
    let [time,SetTime] = useState()
    setInterval(()=>
    {
        let a = new Date().toLocaleTimeString()
        SetTime(a)
    })
    

    return (
        <div>
            <h1 style={{color: "red"}}>Real Time</h1>
            Clock
            {
                time
            }
        </div>
    )
}

export default Clock