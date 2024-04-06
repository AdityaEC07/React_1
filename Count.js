// import React, { useState } from 'react'
// import './App.css'
// const Count = () => {

//     let [Number,SetNumber] = useState(0)
//     const fun1=()=>
//     {
//         SetNumber(Number+1)
//     }
//   return (
//     <div>
//         <h2>hello</h2>
//         <p>{Number}</p>
//         <button onClick={fun1}>click</button>
//     </div>


//   )
// }

// export default Count


 const [count,setCount] = useState
const handlelongin =()=>
{
  if (username.trim()!==''&& passward.trim()!==''){
    setLoggedIn(true);
  }
};
const increment =()=>
{
  setCount(count+1);
};
const decrement =()=>
{
setCount(count-1);
};
const reset =()=>
{
  setCount(0);

};
return(
  <div></div>
)