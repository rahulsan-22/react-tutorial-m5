import { NavLink, Outlet, useNavigate } from 'react-router-dom'

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
      <br />
      <NavLink to="accounts">Accounts</NavLink>
      <NavLink to="settings">Settings</NavLink>
      <NavLink to="orders">Orders</NavLink>
      <Outlet/>
    </div>
  )
}

export default Dashboard