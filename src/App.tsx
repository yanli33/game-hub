import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile divice
        lg: `"nav nav" "aside main"` //large divice 1024px
      }}
    >
      <GridItem area={"nav"} >
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} >
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} padding='10px'>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
