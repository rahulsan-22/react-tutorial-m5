import { useState } from "react"

const ControlledForms = () => {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    week: "",
    month: "",
    date: "",
    time: "",
    datetime: "",
    gender: "",
    skills: [],
    photo: "",
    color: "#000000",
    brightness: "",
    country: "",
    feedback: ""
  })
  let { name, email, password, age, phone, week, month, date, time, datetime, gender, skills, photo, color, brightness, country, feedback } = userData

  let handleChange = (e) => {
    let { name, value, type, files,checked } = e.target
    if (type === "checkbox") {
      let copiedSkills = [...skills]
      if (checked) {
       copiedSkills.push(value)
      } else {
        copiedSkills = copiedSkills.filter(item=>item!=value)
      }
      setUserData({...userData,[name]:copiedSkills})
    } else if (type === "file") {
      setUserData({ ...userData, [name]: files[0] })
    } else {
      setUserData({ ...userData, [name]: value })
    }
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
  }
  return <form onSubmit={handleSubmit}>
    <fieldset>
      <legend>Registration Form 🔥</legend>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange} />
      <br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleChange} />
      <br /><br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={handleChange} />
      <br /><br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" value={age} onChange={handleChange} />
      <br /><br />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} />
      <br /><br />

      <label htmlFor="dob">Dob:</label>
      <input type="week" name="week" value={week} onChange={handleChange} />
      <input type="month" name="month" value={month} onChange={handleChange} />
      <input type="date" name="date" value={date} onChange={handleChange} />
      <input type="time" name="time" value={time} onChange={handleChange} />
      <input type="datetime-local" name="datetime" value={datetime} onChange={handleChange} />
      <br /><br />

      <label>Gender:</label>
      <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
      <label htmlFor="female">Female</label>
      <br /><br />

      <label>Skills:</label>
      <input type="checkbox" id="html" name="skills" value="Html" onChange={handleChange} />
      <label htmlFor="html">Html</label>

      <input type="checkbox" id="css" name="skills" value="Css" onChange={handleChange} />
      <label htmlFor="css">Css</label>

      <input type="checkbox" id="js" name="skills" value="Js" onChange={handleChange} />
      <label htmlFor="js">Js</label>
      <br /><br />

      <label htmlFor="photo">Upload Id:</label>
      <input type="file" id="photo" name="photo" onChange={handleChange} />
      <br /><br />

      <label htmlFor="color">Color:</label>
      <input type="color" id="color" name="color" value={color} onChange={handleChange} />
      <br /><br />

      <label htmlFor="brightness">Brightness:</label>
      <input type="range" id="brightness" name="brightness" value={brightness} onChange={handleChange} />
      <br /><br />

      <label htmlFor="country">Country:</label>
      <select id="country" value={country} name="country" onChange={handleChange}>
        <option>--Select Country--</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Australia">Australia</option>
      </select>
      <br /><br />

      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" value={feedback} onChange={handleChange}></textarea>
      <br /><br />

      <input type="submit" value="Register 💖" />
      <input type="reset" />
    </fieldset>
  </form>
}

export default ControlledForms