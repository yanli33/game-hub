import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
// import apiClient from "../../services/api-client"
//客制化hook
export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number;
  name: string;
  background_image: string;//url
  parent_platforms: { platform: Platform }[]
  metacritic: number
}
interface FetchGameResponse {
  count: number
  results: Game[]
}


const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  const [isLoading, setLoading] = useState(false)
  useEffect(() => { //useEffect is a React Hook that lets you synchronize a component with an external system.
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => { 
        setGames(res.data.results); 
        setLoading(false) })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })
    return () => controller.abort()
  },[])
  // console.log(games)
  return { games, error,isLoading }
}
export default useGames