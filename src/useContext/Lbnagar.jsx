import { useContext } from "react"
import { IcecreamContext, SoftDrinksContext } from "./Zepto"

const Lbnagar = () => {
  let icecream = useContext(IcecreamContext)
  let softdrink = useContext(SoftDrinksContext)
  return (
    <div>Lbnagar - {icecream} - {softdrink}</div>
  )
}

export default Lbnagar