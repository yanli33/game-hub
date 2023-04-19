import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"

const GameGrid = () => {
  const { games, error } = useGames()
  // console.log(111)
  // console.log(games)
  // console.log(games[0].name)
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* 列响应式，媒体查询查询屏幕大小 */}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>

        {games.map((game) => (
          <GameCard  key ={game.id} game={game} ></GameCard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
