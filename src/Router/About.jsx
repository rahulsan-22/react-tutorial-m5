import { useNavigate } from "react-router-dom"

const About = () => {
  let navigate = useNavigate()
  return (
    <>
      <h1>About</h1>
      <button onClick={()=>navigate(1)}>Go Forward One Page</button>
      <button onClick={()=>navigate(2)}>Go Forward Two Page</button>
    </>
  )
}

export default About