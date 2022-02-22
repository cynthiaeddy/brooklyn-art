import { useState, useEffect } from 'react'
import MasonryGrid from './MasonryGrid'
import { useParams } from 'react-router'
const axios = require('axios')

const SearchResults = props => {
  const artistSearch = useParams().artist

  const [artist, setArtist] = useState([])

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
    })
  }, [props.term])

  console.log(artist)

  return (
    <div className='artist-container'>
      <MasonryGrid cards={artist} />
    </div>
  )
}

export default SearchResults
