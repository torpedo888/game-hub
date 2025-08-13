import useGames from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1,2,3,4,5,6];

  return (
    <ul>
      {error && <div>{error}</div>}
      
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeletons.map((skeleton)=> 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton  />
        </GameCardContainer>)}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </ul>
  );
};

export default GameGrid;
