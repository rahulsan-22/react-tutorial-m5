import { useState } from 'react'

const MemoComponent = () => {
  let [age, setAge] = useState(23)
  let [salary, setSalary] = useState(10000)
  let handleAge = () => {
    setAge(age+1)
  }
  let handleSalary = () => {
    setSalary(salary+5000)
  }
  let isEven = () => {
    let i = 0;
    while(i<1000000000) i++
    return age%2
  }
  return (
    <div>
      <h1>Age : {age}</h1>
      <button onClick={handleAge}>Increment Age</button>
      <p>{isEven() === 1 ? "Odd" : "Even"}</p>
      <h1>Salary : {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
    </div>
  )
}

export default MemoComponent