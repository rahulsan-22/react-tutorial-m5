import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchData = () => {
  let [recipesData, setRecipesData] = useState(null)
  useEffect(() => {
    let api = async () => {
      try {
        let { data: { recipes } } = await axios.get("https://dummyjson.com/recipes")
        setRecipesData(recipes)
      } catch (error) {
        console.log(error)
      }
    }
    api()
  }, [])
  return (
    <table rules="all" border={1} width="100%" cellPadding={10}>
      <caption>Recipes 🥳</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Recipe</th>
          <th>Cuisine</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
          recipesData && recipesData.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cuisine}</td>
              <td>{item.ingredients}</td>
              <td>{item.instructions}</td>
              <td><img src={item.image} alt={item.name} height="200" width="200"/></td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default FetchData