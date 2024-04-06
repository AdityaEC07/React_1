// import React, { useState } from 'react'      /// one click to change data on button
// import './App.css'
// const Data = () => {

//     // let [Name,SetName] = useState(0)
//     let [data,SetData]= useState('Byyyy')
//     useState()
//     const fun1=()=>
//     {
//         // SetName(Name+1)
//         SetData('hiiii')
//     }
//   return (
//     <div>
//         {/* <h2>hello</h2> */}
//         <p> {data} < / p >
//         <button onClick={fun1}>click</button>
//     </div>


//   )
// }

// export default Data

import React, { useState } from 'react'      /// used css in react
import './Data.css'
const Data = () => {

    // let [Name,SetName] = useState(0)
    let [data,SetData]= useState('Byyyy')
    useState()
    const fun1=()=>
    {
        // SetName(Name+1)
        SetData('hiiii')
    }
       return (
    <div id='one'>
        <h2 style = {{color:'red'}}> hello</h2>
        
        <p>{data}</p>

        <button onClick={fun1}>click</button>
    </div>
 
 )
}

export default Data


