//!Example 1: (Number State)
// import { useState } from 'react'
// const State = () => {
//   let [count, setCount] = useState(0)
//   let handleIncrement = () => {
//     setCount(count + 1)
//   }
//   let handleDecrement = () => {
//    setCount(count-1)
//   }
//   let handleReset = () => {
//    setCount(0)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }
// export default State

//!Example 2: (String State)
// import { useState } from 'react'
// const State = () => {
//   let [food, setFood] = useState("")
//   let handleChickenBiryani = () => {
//     setFood("Chicken Biryani")
//   }
//   let handleMuttonBiryani = () => {
//     setFood("Mutton Biryani")
//   }
//   let handleFishBiryani = () => {
//     setFood("Fish Biryani")
//   }
//   return (
//     <div>
//       <h1>My fav food is : {food}</h1>
//       <button onClick={handleChickenBiryani}>CB</button>
//       <button onClick={handleMuttonBiryani}>MB</button>
//       <button onClick={handleFishBiryani}>FB</button>
//     </div>
//   )
// }
// export default State

//!Example 3: (Boolean State)
// import { useState } from 'react'

// const State = () => {
//   let [lightMode, setLightMode] = useState(true)
//   let handleLightMode = () => {
//     setLightMode(!lightMode)
//   }
//   return (
//     <div>
//       <h1>Mode: {lightMode ? "Light" : "Dark"}</h1>
//       <button onClick={handleLightMode}>Switch to {lightMode ? "Dark" : "Light"} Mode</button>
//     </div>
//   )
// }

// export default State

//!Example 4: (Array State)
import { useState } from 'react'
const State = () => {
  let [snacks, setSnacks] = useState(["Samosa", "Punugulu", "Panipuri"])
  let handleSnacks = () => {
    setSnacks([...snacks,"EggPuff"])
  }
  return (
    <div>
      <h1>List of Snacks</h1>
      <ol>
        {
          snacks.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ol>
      <button onClick={handleSnacks}>Add EggPuff</button>
    </div>
  )
}
export default State