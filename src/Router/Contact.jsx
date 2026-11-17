import { useLocation, useNavigate } from "react-router-dom"

const Contact = () => {
  let data = useLocation()
  let navigate = useNavigate()
  return (
    <>
      <h1>Contact</h1>
      <div>
        <h1>Username : {data?.state?.name}</h1>
        <h1>Age : {data?.state?.age}</h1>
      </div>
      <button onClick={()=>navigate(-1)}>Go Back One Page</button>
      <button onClick={()=>navigate(-2)}>Go Back Two Page</button>
    </>
  )
}

export default Contact