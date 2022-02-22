import { useState, useEffect } from 'react'
import MasonryGrid from './MasonryGrid'
const axios = require('axios')

const SearchResults = props => {
  const [artist, setArtist] = useState([])

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      // setArtist(response.data)
      console.log('in search results', response.data)
    })
  }, [props.term])

  return (
    <div className='artist-container'>
      {/* {artist} */}
      {/* <MasonryGrid cards={artist} /> */}
    </div>
  )
}

export default SearchResults
