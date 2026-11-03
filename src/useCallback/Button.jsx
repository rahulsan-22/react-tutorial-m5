import { memo } from "react"

const Button = ({ fun, children }) => {
  console.log(`${children} Component Rendering...`)
  return (
    <button onClick={fun}>{children}</button>
  )
}

export default memo(Button)