import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "main aside"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", md: "1fr 300px", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
