//!Click

//*Example 1:
// const Actions = () => {
//   let handlePopup = () => {
//     alert(new Date().toLocaleTimeString())
//   }
//   return (
//     <button onClick={handlePopup}>Click</button>
//   )
// }
// export default Actions

//*Example 2:
// const Actions = () => {
//   let handleRandomNumber = () => {
//     console.log(Math.random())
//   }
//   return (
//     <button onClick={handleRandomNumber}>Generate Random Number</button>
//   )
// }
// export default Actions

//*Example 3:
// const Actions = () => {
//   let handleGreetUser = (name) => {
//     alert("Good Morning "+name)
//   }
//   return (
//     <button onClick={()=>handleGreetUser("Monty")}>Greet User</button>
//   )
// }
// export default Actions

//!Event Object
// const Actions = () => {
//   let handleName = (e) => {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.target.innerText)
//     console.log("Rahul")
//   }
//   return (
//     <h1 onClick={handleName}>Click here to print my name</h1>
//   )
// }

// export default Actions

//!Focus,Change and Blur
// const Actions = () => {
//   let handleFocus = (e) => {
//     e.target.style.backgroundColor = "red"
//   }
//   let handleChange = (e) => {
//     e.target.style.backgroundColor="yellow"
//   }
//   let handleBlur = (e) => {
//     e.target.style.backgroundColor="blue"
//   }
//   return (
//     <input placeholder='Enter your name' onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} />
//   )
// }
// export default Actions

//!Submit
// const Actions = () => {
//   let handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form Submitted")
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder='Enter your email' />
//       <br /><br />
//       <input type="password" placeholder='Enter your password' />
//       <br /><br />
//       <input type="submit" value="Login" />
//     </form>
//   )
// }
// export default Actions

//!Mouseenter,Mousemove and MouseLeave
const Actions = () => {
  let handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "red"
  }
  let handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "yellow"
  }
  let handleMouseMove = (e) => {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`
  }
  return (
    <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}>Actions</h1>
  )
}
export default Actions