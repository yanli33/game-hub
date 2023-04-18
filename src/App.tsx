import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
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
      <GridItem area={"main"} >
        Main
      </GridItem>
    </Grid>
  )
}

export default App
