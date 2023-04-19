import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  // console.log(111)
  // console.log(games)
  // console.log(games[0].name)
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* 列响应式，媒体查询查询屏幕大小 */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
