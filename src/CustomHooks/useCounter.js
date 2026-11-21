import { useState } from "react"

const useCounter = () => {
  let [count, setCount] = useState(0)
  let handleIncrement = () => {
    setCount(count + 1)
  }
  let handleDecrement = () => {
    setCount(count - 1)
  }
  return { count, handleIncrement, handleDecrement }
}

export default useCounter