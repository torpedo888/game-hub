import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <ul>
      {error && <div>{error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </ul>
  );
};

export default GameGrid;
