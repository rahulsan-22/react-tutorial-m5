//!Example 1: (Focusing the input field)
// import { useRef } from "react"
// const Reference = () => {
//   let inputRef = useRef(null)
//   let handleFocus = () => {
//     inputRef.current.focus()
//   }
//   return (
//     <>
//       <input type="text" placeholder='Search...' ref={inputRef} />
//       <button onClick={handleFocus}>Click to Focus</button>
//     </>
//   )
// }
// export default Reference

//!Example 2: (Getting the value)
// import  { useRef } from 'react'
// const Reference = () => {
//   let inputRef = useRef(null)
//   console.log(inputRef)
//   let handleValue = () => {
//     inputRef.current.style.color = "white"
//     inputRef.current.style.backgroundColor = "black"
//     console.log(inputRef.current.value)
//   }
//   return (
//     <>
//       <input type="text" placeholder='Enter your name' ref={inputRef} />
//       <button onClick={handleValue}>Get Value</button>
//     </>
//   )
// }
// export default Reference

//!Example 3: (Counter)
import  { useRef, useState } from 'react'

const Reference = () => {
  let counterRef = useRef(0)
  let [count,setCount]=useState(0)
  let handleIncrement1 = () => {
    counterRef.current++
    console.log("ref",counterRef.current)
  }
  let handleIncrement2 = () => {
    console.log("state",count)
    setCount(count+1)
  }
  return (
    <div>
      <h1>Count1 : {counterRef.current}</h1>
      <button onClick={handleIncrement1}>Increment Count1</button>
      <h1>Count2: {count}</h1>
      <button onClick={handleIncrement2}>Increment Count2</button>
    </div>
  )
}

export default Reference