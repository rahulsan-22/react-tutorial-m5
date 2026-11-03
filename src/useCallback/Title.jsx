import { memo } from "react"

const Title = () => {
  console.log("Title Component Rendering....")
  return (
    <h1>useCallback</h1>
  )
}

export default memo(Title)