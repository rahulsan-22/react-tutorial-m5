import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (URL) => {
  let [apiData, setApiData] = useState(null)
  useEffect(() => {
    let api = async () => {
      let { data } = await axios.get(URL)
      setApiData(data)
    }
    api()
  }, [])
  return {apiData}
}

export default useFetch