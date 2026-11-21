import useFetch from './useFetch'

const ProductsData = () => {
  let { apiData } = useFetch("https://dummyjson.com/products")
  console.log(apiData)
  return (
    <div>ProductsData</div>
  )
}

export default ProductsData