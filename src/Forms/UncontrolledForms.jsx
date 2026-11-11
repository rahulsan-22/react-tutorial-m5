const UncontrolledForms = () => {
  let handleSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      age: formData.get("age"),
      phone: formData.get("phone"),
      week: formData.get("week"),
      month: formData.get("month"),
      date: formData.get("date"),
      time: formData.get("time"),
      datetime: formData.get("datetime"),
      gender: formData.get("gender"),
      skills: formData.getAll("skills"),
      photo: formData.get("photo"),
      color: formData.get("color"),
      brightness: formData.get("brightness"),
      country: formData.get("country"),
      feedback: formData.get("feedback"),
    }
    console.log(userData)
  }
  return <form onSubmit={handleSubmit}>
    <fieldset>
      <legend>Registration Form 🔥</legend>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br /><br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br /><br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" />
      <br /><br />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" />
      <br /><br />

      <label htmlFor="dob">Dob:</label>
      <input type="week" name="week" />
      <input type="month" name="month" />
      <input type="date" name="date" />
      <input type="time" name="time" />
      <input type="datetime-local" name="datetime" />
      <br /><br />

      <label>Gender:</label>
      <input type="radio" id="male" name="gender" value="Male" />
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" name="gender" value="Female" />
      <label htmlFor="female">Female</label>
      <br /><br />

      <label>Skills:</label>
      <input type="checkbox" id="html" name="skills" value="Html" />
      <label htmlFor="html">Html</label>

      <input type="checkbox" id="css" name="skills" value="Css" />
      <label htmlFor="css">Css</label>

      <input type="checkbox" id="js" name="skills" value="Js" />
      <label htmlFor="js">Js</label>
      <br /><br />

      <label htmlFor="photo">Upload Id:</label>
      <input type="file" id="photo" name="photo" />
      <br /><br />

      <label htmlFor="color">Color:</label>
      <input type="color" id="color" name="color" />
      <br /><br />

      <label htmlFor="brightness">Brightness:</label>
      <input type="range" id="brightness" name="brightness" />
      <br /><br />

      <label htmlFor="country">Country:</label>
      <select id="country" name="country" >
        <option>--Select Country--</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Australia">Australia</option>
      </select>
      <br /><br />

      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback"></textarea>
      <br /><br />

      <input type="submit" value="Register 💖" />
      <input type="reset" />
    </fieldset>
  </form>
}

export default UncontrolledForms