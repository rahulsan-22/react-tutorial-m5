const Login = () => {
  return (
    <form>
      <fieldset>
        <legend>Login Form</legend>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <br /><br />
        <input type="submit" value="Login" />
     </fieldset>
    </form>
  )
}
export default Login