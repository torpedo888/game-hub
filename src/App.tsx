import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import GenreList from "./components/GenreList";

function App() {
  const [showGames, setShowGames] = useState(true);

  return (
    <>
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
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
