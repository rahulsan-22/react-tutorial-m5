const Welcome = ({ name }) => {
  if (name === "Monty") {
    throw new Error("Something went wrongg..")
  }
  return (
    <div>Welcome - {name}</div>
  )
}

export default Welcome