//!Props
// const Welcome = ({ trainer, subject, duration = 30,isStrict,skills,address:{place},fun }) => {
//   return (
//     <h1>Welcome {trainer} who teaches {subject} in {duration} days who is {isStrict ? "strict" : "not strict"} apart from the {subject} he is good at {skills.join(",")} and he belongs to {place} so thats y he is known as {fun()}</h1>
//   )
// }

// export default Welcome

//!Props Children
const Welcome = ({breakfast, children}) => {
  return (
    <>
      <h1>{breakfast} </h1>
      {children}
    </>
  )
}

export default Welcome