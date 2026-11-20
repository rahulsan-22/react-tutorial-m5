import { createPortal } from "react-dom"

const LoginForm = () => {
  return createPortal(<form>
      <input type="email" placeholder='Enter your email' />
      <br /><br />
      <input type="password" placeholder='Enter your password' />
      <br /><br />
      <input type="submit" value="Login" />
    </form>,document.getElementById("portal"))
}

export default LoginForm