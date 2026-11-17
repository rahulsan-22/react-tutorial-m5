import { useNavigate } from "react-router-dom"

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/contact", { state: { name: "Rahul", age: 26 } })}>Go To Contact Page</button>
    </>
  )
}

export default Home