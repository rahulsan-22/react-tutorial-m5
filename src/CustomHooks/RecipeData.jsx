import useFetch from './useFetch'

const RecipeData = () => {
  let { apiData } = useFetch("https://dummyjson.com/recipes")
  console.log(apiData)
  return (
    <div>RecipeData</div>
  )
}

export default RecipeData