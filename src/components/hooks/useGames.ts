import { useState ,useEffect} from "react"
import apiClient from "../../services/api-client"
import { CanceledError } from "axios"
// import apiClient from "../../services/api-client"
//客制化hook
interface Game {
    id: number
    name: string
  }
  interface FetchGameResponse {
    count: number
    results: Game[]
}


const useGames = ()=>{
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    useEffect(() => { //useEffect is a React Hook that lets you synchronize a component with an external system.
      apiClient
        .get<FetchGameResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => {if (err instanceof CanceledError) return
            setError(err.message)})

    },[])
    return {games,error}
}
export default useGames