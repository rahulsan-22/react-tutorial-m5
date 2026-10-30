import { useEffect, useState } from "react"
import Unmount from "./Unmount"

const Effect = () => {
  let [count, setCount] = useState(0)
  let [salary, setSalary] = useState(10000)

  //!useEffect with empty dependency
  // useEffect(() => {
  //   console.log("useEffect Running like ComponentDidMount..")
  // }, [])

  //!useEffect without dependency Array
  // useEffect(() => {
  //    console.log("useEffect Running like ComponentDidUpdate...")
  // })

  //!useEffect with dependencies
  // useEffect(() => {
  //   console.log("useEffect runs only when count value changes....")
  // }, [count])
  
  let handleCount = () => {
    setCount(count + 1)
  }
  let handleSalary = () => {
    setSalary(salary + 10000)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleCount}>Increment Count</button>
      <h1>Salary : {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
      {salary<50000 && <Unmount/>}
    </div>
  )
}

export default Effect