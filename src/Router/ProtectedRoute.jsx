import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
  let loggedInStatus = localStorage.getItem("isLoggedIn")
  console.log(loggedInStatus)
  if (loggedInStatus) {
    return children
  } else {
    return <Navigate to="/login"/>
  }
}

export default ProtectedRoute