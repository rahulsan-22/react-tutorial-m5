import { useParams } from "react-router-dom"

const Product = () => {
  let {id,name,price} = useParams()
  return (
    <div>
      <h1>Id:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Price:{price}</h1>
    </div>
  )
}

export default Product