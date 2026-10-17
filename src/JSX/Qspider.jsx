//!Rule 1: JSX expressions must have one parent element.
// let Qspider = () => {
//   return <div>
//     <h1>Good Morning...</h1>
//     <p>Tinnara?</p>
//   </div>
// }
// export default Qspider

//!Rule 2: Unpaired Tags must be closed properly
// let Qspider = () => {
//   return <div>
//     <img src="favicon.svg" />
//     <input></input>
//   </div>
// }
// export default Qspider

//!Rule 3: Attributes should be written in camelCase and the attributes like class and for should be replaced with className and htmlFor.
// let Qspider = () => {
//   return <div>
//     <label htmlFor="day">Day:</label>
//     <h1 className="heading">Saturday</h1>
//   </div>
// }
// export default Qspider

//!Rule 4: JSX Elements must be written in lowercase
// let Qspider = () => {
//   return <button>Click</button>
// }
// export default Qspider

//!Fragments -- are used to render multiple elements without creating a extra node
//*Syntax: <Fragment></Fragment> or <></>
// import { Fragment } from "react"
// let Qspider = () => {
//   return <Fragment>
//     <h1>Hello Guys Dont be late</h1>
//     <p>Hope you enjoyed your weekend</p>
//   </Fragment>
// }
// export default Qspider

//!Expressions -- helps to write js code inside jsx
let Qspider = () => {
  let name = "Monty"
  let age = 25
  let subject = () => "Python"
  let isMarried = false
  let skills = ["Singing","Dancing","Motivation"]
  return <>
    <h1>My name is {name}</h1>
    <p>I am {age + 5} years old</p>
    <p>I am {subject()} Trainer</p>
    <p>{isMarried ? "Happily Married" : "Happily Single"}</p>
    <ol>
      {
        skills.map((item) =><li>{item}</li>)
      }
    </ol>
  </>
}
export default Qspider