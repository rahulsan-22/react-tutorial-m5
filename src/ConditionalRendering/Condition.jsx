//!1)Ternary Operator

//*Example 1:
// const Condition = () => {
//   let loginStatus = false
//   return (
//     <div>
//       { loginStatus ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}
//     </div>
//   )
// }
// export default Condition

//*Example 2:
// import Login from "./Login"
// import Register from "./Register"
// const Condition = () => {
//   let existingUser = false
//   return (
//     <div>
//       {existingUser ? <Login/> : <Register/>}
//     </div>
//   )
// }
// export default Condition

//!2)Logical AND or Short-Circuit AND (&&)

//*Example:
import Login from './Login'
const Condition = () => {
  let existingUser = false
  return (
    <div>
      {
        existingUser && <Login/>
      }
    </div>
  )
}
export default Condition

//!3)Else-If

//*Example
const Condition = () => {
  let holidays = 0
  if (holidays > 3) {
    return <h1>Go to a trip</h1>
  } else if (holidays >= 2 && holidays <= 3) {
    return <h1>Go to home town</h1>
  } else if (holidays >= 1 && holidays < 2) {
    return <h1>Roam nearby places in Hyd</h1>
  } else {
    return <h1>Work like buffalo in your institute</h1>
  }
}
export default Condition

//!4)Element Variable

//*Example
const Condition = () => {
  let holidays = 1
  let result;
  if (holidays > 3) {
    result = <h1>Go to a trip</h1>
  } else if (holidays >= 2 && holidays <= 3) {
    result = <h1>Go to home town</h1>
  } else if (holidays >= 1 && holidays < 2) {
    result = <h1>Roam nearby places in Hyd</h1>
  } else {
    result = <h1>Work like buffalo in your institute</h1>
  }
  return result
}
export default Condition