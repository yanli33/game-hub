import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenerList from "./components/GenerList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import './index.css'
import GameHeading from "./components/GameHeading"
export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText:string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile divice
        lg: `"nav nav" "aside main"`, //large divice 1024px
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }} //左右边栏自适应
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenerList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding="10px">
        <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery}/>
        <Flex  marginBottom={5}>
          <Box marginBottom={5} >
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          </Box>
         
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        </Box>
        

        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
