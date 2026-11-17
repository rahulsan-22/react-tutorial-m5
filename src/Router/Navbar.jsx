import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/product/1/iphone13/50000">Product 1</NavLink>
      <NavLink to="/product/2/Shoes/2000">Product 2</NavLink>
      <NavLink to="/product/3/Chocolate/10">Product 3</NavLink>
   
    </nav>
  )
}

export default Navbar