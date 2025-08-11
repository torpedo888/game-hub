import useData from '@/hooks/useData';
import useGenres, { Genre } from '@/hooks/useGenres';
import React from 'react'

const GenreList = () => {

 const {data} = useGenres();

  return (
    <ul>
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}  
    </ul>
  )
}

export default GenreList