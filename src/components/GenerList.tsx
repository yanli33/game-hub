import React from 'react'
import useGenres from '../hooks/useGenres'

const GenerList = () => {
    const {genres}=useGenres()
  return (
  <ul>
    {genres.map(genre=><li key={genre.id} >{genre.name}</li>)}
  </ul>
  )
}

export default GenerList