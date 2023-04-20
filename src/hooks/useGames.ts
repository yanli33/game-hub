import { GameQuery } from "../App";
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
const useGames = (gameQuery: GameQuery) =>
  useData<Game>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder
    }
  },
    [gameQuery]) //一旦deps改变吗，就会执行


export default useGames