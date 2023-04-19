import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
interface Genre{
    id:number
    name:string
}

interface FetchGenreResonce{
    count:number
    results:Genre[]
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("")

    const [isLoading, setLoading] = useState(false)
    useEffect(() => { //useEffect is a React Hook that lets you synchronize a component with an external system.
        const controller = new AbortController()
        setLoading(true)
        apiClient
            .get<FetchGenreResonce>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            })
        return () => controller.abort()
    }, [])
    // console.log(games)
    return { genres, error, isLoading }
}

export default useGenres