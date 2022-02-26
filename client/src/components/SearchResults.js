import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ArtistCard from './ArtistCard'

const element = <FontAwesomeIcon icon={faHome} />

const axios = require('axios')

const SearchResults = props => {
  const [artist, setArtist] = useState([])

  const refreshPage = () => {
    window.location.reload(false)
  }

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
    })
  }, [props.term])
  console.log(artist)

  const firstArtObj = []
  const renderCards = () => {
    if (artist === '0 results found' || artist.length < 3) {
      return (
        <h5 className='search-word no-results'>
          0 results found
          <br />
          <button onClick={refreshPage} style={{ marginTop: '10px' }}>
            {element}
          </button>
        </h5>
      )
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
          changeBg={props.changeBg}
        />
      )
    })
  }
  return (
    <>
      {/* <div className='wrapper'>{artist.length && renderCards()}</div> */}
      <div className='wrapper'>{renderCards()}</div>
    </>
  )
}

export default SearchResults
