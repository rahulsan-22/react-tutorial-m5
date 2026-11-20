import { memo } from "react"

const Memo = ({ name }) => {
  console.log("Memo Component Rendering....")
  return (
    <div>Memo - {name}</div>
  )
}

export default memo(Memo)