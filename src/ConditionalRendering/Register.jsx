const Register = () => {
  return (
    <form>
      <fieldset>
        <legend>Registration Form</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"/>
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"/>
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"/>
        <br /><br />
        <label htmlFor="cpassword">Confirm Password:</label>
        <input type="password" id="cpassword" />
        <br /><br />
        <input type="submit" value="Register"/>
      </fieldset>
    </form>
  )
}
export default Register