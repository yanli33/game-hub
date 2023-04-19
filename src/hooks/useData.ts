import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"


interface FetchResonce<T>{ 
    count:number
    results:T[]
}
const useData =<T> (endpoint:string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")

    const [isLoading, setLoading] = useState(false)
    useEffect(() => { //useEffect is a React Hook that lets you synchronize a component with an external system.
        const controller = new AbortController()
        setLoading(true)
        apiClient
            .get<FetchResonce<T>>(endpoint, { signal: controller.signal })
            .then((res) => {
                setData(res.data.results);
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
    return { data, error, isLoading }
}

export default useData