import { useState, useEffect } from 'react'
import MasonryGrid from './MasonryGrid'
const axios = require('axios')

const SearchResults = props => {
  const [artist, setArtist] = useState([])

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
      // console.log(response.data)
      // const filterArtist =
      // response.data.map(d => [console.log('in d', d.object_id)])
    })
  }, [props.term])

  // console.log(artist)

  return (
    <div className='artist-container'>
      <MasonryGrid cards={artist} />
    </div>
  )
}

export default SearchResults
