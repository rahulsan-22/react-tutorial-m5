import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const ReactHookForm = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Name Field is Mandatory").min(3, "Enter min of 3 characters").max(15, "Enter below 15 characters"),
    email: yup.string().required("Email is Mandatory").email("Invalid Format"),
    password: yup.string().required("Password is Mandatory").min(8, "Password must contain minimum 8 characters").max(20, "Password cannot exceed 20 characters").matches(/[A-Z]/, "At least one uppercase letter required").matches(/[a-z]/, "At least one lowercase letter required").matches(/[0-9]/, "At least one number required"),
    age: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value).typeError("Age must be a number").required("Age is Mandatory").min(18, "Minimum age should be 18").max(60, "Maximum age should be 60"),
    phone: yup.string().required("Phone Number is Mandatory").matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    week: yup.string().required("Please select a week"),
    month: yup.string().required("Please select a month"),
    date: yup.string().required("Date of Birth is Mandatory"),
    time: yup.string().required("Please select a time"),
    datetime: yup.string().required("Please select date and time"),
    gender: yup.string().required("Please select your gender").oneOf(["Male", "Female"], "Invalid Gender"),
    skills: yup.array().of(yup.string()).min(1, "Select at least one skill").required("Please select your skills"),
    photo: yup.mixed()
      .required("Please upload your ID")
      .test("fileExists", "Please upload your ID", (value) => value && value.length > 0)
      .test("fileSize", "File size must be below 2MB", (value) => !value || value.length === 0 || value[0].size <= 2 * 1024 * 1024)
      .test("fileType", "Only JPG and PNG files are allowed", (value) => !value || value.length === 0 || ["image/jpeg", "image/png"].includes(value[0].type)),
    color: yup.string().required("Please select a color").matches(/^#[0-9A-Fa-f]{6}$/, "Invalid color"),
    brightness: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value).typeError("Brightness must be a number").required("Please select brightness").min(0, "Minimum brightness is 0").max(100, "Maximum brightness is 100"),
    country: yup.string().required("Please select a country").oneOf(["India", "China", "Australia"], "Invalid Country"),
    feedback: yup.string().required("Feedback is Mandatory").min(10, "Feedback must contain at least 10 characters").max(200, "Feedback cannot exceed 200 characters")
  })

  let { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  })

  console.log(errors)

  let userDetails = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(userDetails)}>
      <fieldset>
        <legend>Registration Form 🔥</legend>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" {...register("age")} />
        <p style={{ color: "red" }}>{errors.age?.message}</p>
        <br /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" {...register("phone")} />
        <p style={{ color: "red" }}>{errors.phone?.message}</p>
        <br /><br />

        <label htmlFor="dob">Dob:</label>
        <input type="week" {...register("week")} />
        <p style={{ color: "red" }}>{errors.week?.message}</p>

        <input type="month" {...register("month")} />
        <p style={{ color: "red" }}>{errors.month?.message}</p>

        <input type="date" {...register("date")} />
        <p style={{ color: "red" }}>{errors.date?.message}</p>

        <input type="time" {...register("time")} />
        <p style={{ color: "red" }}>{errors.time?.message}</p>

        <input type="datetime-local" {...register("datetime")} />
        <p style={{ color: "red" }}>{errors.datetime?.message}</p>
        <br /><br />

        <label>Gender:</label>
        <input type="radio" id="male" value="Male" {...register("gender")} />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" value="Female" {...register("gender")} />
        <label htmlFor="female">Female</label>
        <p style={{ color: "red" }}>{errors.gender?.message}</p>
        <br /><br />

        <label>Skills:</label>
        <input type="checkbox" id="html" value="Html" {...register("skills")} />
        <label htmlFor="html">Html</label>

        <input type="checkbox" id="css" value="Css" {...register("skills")} />
        <label htmlFor="css">Css</label>

        <input type="checkbox" id="js" value="Js" {...register("skills")} />
        <label htmlFor="js">Js</label>
        <p style={{ color: "red" }}>{errors.skills?.message}</p>
        <br /><br />

        <label htmlFor="photo">Upload Id:</label>
        <input type="file" id="photo" {...register("photo")} />
        <p style={{ color: "red" }}>{errors.photo?.message}</p>
        <br /><br />

        <label htmlFor="color">Color:</label>
        <input type="color" id="color" {...register("color")} defaultValue="#000000" />
        <p style={{ color: "red" }}>{errors.color?.message}</p>
        <br /><br />

        <label htmlFor="brightness">Brightness:</label>
        <input type="range" id="brightness" {...register("brightness")} />
        <p style={{ color: "red" }}>{errors.brightness?.message}</p>
        <br /><br />

        <label htmlFor="country">Country:</label>
        <select id="country" {...register("country")}>
          <option value="">--Select Country--</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Australia">Australia</option>
        </select>
        <p style={{ color: "red" }}>{errors.country?.message}</p>
        <br /><br />

        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" {...register("feedback")}></textarea>
        <p style={{ color: "red" }}>{errors.feedback?.message}</p>
        <br /><br />

        <input type="submit" value="Register 💖" />
        <input type="reset" onClick={() => reset()} />
      </fieldset>
    </form>
  )
}

export default ReactHookForm
