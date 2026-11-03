import { memo } from "react"

const Count = ({ text, count }) => {
  console.log(`${text} Component Rendering...`)
  return (
    <h1>{text} - {count}</h1>
  )
}

export default memo(Count)