const ReactHookForm = () => {
  return <form>
    <fieldset>
      <legend>Registration Form 🔥</legend>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email"  />
      <br /><br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <br /><br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" />
      <br /><br />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone"  />
      <br /><br />

      <label htmlFor="dob">Dob:</label>
      <input type="week"  />
      <input type="month" />
      <input type="date" />
      <input type="time" />
      <input type="datetime-local" />
      <br /><br />

      <label>Gender:</label>
      <input type="radio" id="male" value="Male" />
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" value="Female" />
      <label htmlFor="female">Female</label>
      <br /><br />

      <label>Skills:</label>
      <input type="checkbox" id="html" value="Html" />
      <label htmlFor="html">Html</label>

      <input type="checkbox" id="css" value="Css" />
      <label htmlFor="css">Css</label>

      <input type="checkbox" id="js" value="Js" />
      <label htmlFor="js">Js</label>
      <br /><br />

      <label htmlFor="photo">Upload Id:</label>
      <input type="file" id="photo"  />
      <br /><br />

      <label htmlFor="color">Color:</label>
      <input type="color" id="color" />
      <br /><br />

      <label htmlFor="brightness">Brightness:</label>
      <input type="range" id="brightness" />
      <br /><br />

      <label htmlFor="country">Country:</label>
      <select id="country">
        <option>--Select Country--</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Australia">Australia</option>
      </select>
      <br /><br />

      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback"></textarea>
      <br /><br />

      <input type="submit" value="Register 💖" />
      <input type="reset" />
    </fieldset>
  </form>
}

export default ReactHookForm