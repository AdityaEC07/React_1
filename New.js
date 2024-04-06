import React from 'react'
import './App.css'

export const New = (b) => {
  // console.log(b);
    // let arr=[1,2,3]
     
    let count=0
    const ok=()=>{
      count++
      console.log(count,"ddfdsfdsds");
    }

    return(
      <div>
        <h2>okkkkkkkkkkkkk</h2>
        <p>{count}</p>
        <button onClick={ok}>click meeee</button>
      </div>
    )
  // return (
  //   // <div>
  //   //   {
  //   //     arr.map((a)=>{
  //   //       return(
  //   //         <li>{a}</li>
  //   //       )
  //   //     })
  //   //   }
  //   //  {/* {b.data} */}
  //   // </div>
  //   // <div>
  //   //   {b.data}
  //   //   </div>
  // )
}