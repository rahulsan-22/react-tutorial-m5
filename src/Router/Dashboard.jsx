import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate()
  let handleNavigate = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <h1>Welcome User</h1>
      <button onClick={handleNavigate}>Logout</button>
    </div>
  )
}

export default Dashboard