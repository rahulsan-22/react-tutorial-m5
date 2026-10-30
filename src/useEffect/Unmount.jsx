import { useEffect } from "react"

const Unmount = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Hello")
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div>Unmount</div>
  )
}

export default Unmount