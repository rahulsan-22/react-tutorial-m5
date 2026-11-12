import { useForm } from "react-hook-form"

const ReactHookForm = () => {
  let { register, reset, handleSubmit } = useForm()
  let userDetails = (data) => {
    console.log(data)
  }
  return <form onSubmit={handleSubmit(userDetails)}>
    <fieldset>
      <legend>Registration Form 🔥</legend>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" {...register("name")} />
      <br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...register("email")} />
      <br /><br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" {...register("password")}/>
      <br /><br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" {...register("age")}/>
      <br /><br />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" {...register("phone")}/>
      <br /><br />

      <label htmlFor="dob">Dob:</label>
      <input type="week" {...register("week")}/>
      <input type="month" {...register("month")}/>
      <input type="date" {...register("date")}/>
      <input type="time" {...register("time")}/>
      <input type="datetime-local" {...register("datetime")}/>
      <br /><br />

      <label>Gender:</label>
      <input type="radio" id="male" value="Male" {...register("gender")}/>
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" value="Female" {...register("gender")}/>
      <label htmlFor="female">Female</label>
      <br /><br />

      <label>Skills:</label>
      <input type="checkbox" id="html" value="Html" {...register("skills")}/>
      <label htmlFor="html">Html</label>

      <input type="checkbox" id="css" value="Css" {...register("skills")}/>
      <label htmlFor="css">Css</label>

      <input type="checkbox" id="js" value="Js" {...register("skills")}/>
      <label htmlFor="js">Js</label>
      <br /><br />

      <label htmlFor="photo">Upload Id:</label>
      <input type="file" id="photo" {...register("photo")}/>
      <br /><br />

      <label htmlFor="color">Color:</label>
      <input type="color" id="color" {...register("color")} defaultValue="#000000"/>
      <br /><br />

      <label htmlFor="brightness">Brightness:</label>
      <input type="range" id="brightness" {...register("brightness")}/>
      <br /><br />

      <label htmlFor="country">Country:</label>
      <select id="country" {...register("country")}>
        <option>--Select Country--</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Australia">Australia</option>
      </select>
      <br /><br />

      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" {...register("feedback")}></textarea>
      <br /><br />

      <input type="submit" value="Register 💖" />
      <input type="reset" onClick={()=>reset()}/>
    </fieldset>
  </form>
}

export default ReactHookForm