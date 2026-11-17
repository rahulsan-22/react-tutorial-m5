import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  let handleNavigate = () => {
    localStorage.setItem("isLoggedIn", true)
    navigate("/dashboard")
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleNavigate}>Go To Dashboard</button>
    </div>
  )
}

export default Login