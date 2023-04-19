import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenerList from "./components/GenerList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
function App() {
  const [selectedGenere, setSelectedGenere]=useState<Genre|null>(null)
  const [selectedPlatform,setSelectedPlatform ] = useState<Platform|null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile divice
        lg: `"nav nav" "aside main"` //large divice 1024px
      }}
      templateColumns={{base:'1fr' ,lg:'200px 1fr'}} //左右边栏自适应
    >
      <GridItem area="nav" >
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenerList onSelectedGenre={(genre)=>setSelectedGenere(genre)} selectedGenre={selectedGenere
          }/>
        </GridItem>
      </Show>
      <GridItem area="main" padding='10px'>
        <PlatformSelector selectedPlatform={selectedPlatform}  onSelectedPlatform={(platform)=>setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenere} ></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
