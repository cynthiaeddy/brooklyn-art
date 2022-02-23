import { useState, useEffect } from 'react'
import ArtistCard from './ArtistCard'
const axios = require('axios')

const SearchResults = props => {
  const [artist, setArtist] = useState([])

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
    })
  }, [props.term])
  console.log(artist)

  const firstArtObj = []
  const renderCards = () => {
    if (artist === '0 results found') {
      return <h4>0 results found</h4>
    }
    artist.map(artData => firstArtObj.push(artData.data[0]))

    return firstArtObj.map(art => {
      return (
        <ArtistCard
          caption={art.caption}
          key={art.id}
          img={art.largest_derivative_url}
          smImg={art.standard_size_url}
          art={art}
        />
      )
    })
  }
  return (
    <>
      <div className='wrapper'>{renderCards()}</div>
    </>
  )
}

export default SearchResults
