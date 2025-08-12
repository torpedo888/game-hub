import useData from '@/hooks/useData';
import useGenres, { Genre } from '@/hooks/useGenres';
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import React from 'react'

const GenreList = () => {

 const {data, isLoading, error} = useGenres();

 if(error) return null;

 if (isLoading) return <Spinner/>;

  return (
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
            <Image src={genre.image_background} boxSize='32px' borderRadius={8} />
            <Text fontSize='lg'>{genre.name}</Text>
        </HStack> 
        </ListItem>)}  
    </List>
  )
}

export default GenreList