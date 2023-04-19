import useData from "./useData"
import { Genre } from "./useGenres";
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
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])


export default useGames