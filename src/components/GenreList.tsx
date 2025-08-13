import useData from '@/hooks/useData';
import useGenres, { Genre } from '@/hooks/useGenres';
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  onSelectGenre: (genre:Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {

 const {data, isLoading, error} = useGenres();

 if(error) return null;

 if (isLoading) return <Spinner/>;

  return (
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
            <Image src={genre.image_background} boxSize='32px' borderRadius={8} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} 
              onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack> 
        </ListItem>)}  
    </List>
  )
}

export default GenreList