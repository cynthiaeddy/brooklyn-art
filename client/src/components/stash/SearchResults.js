import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ArtistCard from './ArtistCard'
import '../stylesheets/Search.css'
const axios = require('axios')

const element = <FontAwesomeIcon icon={faHome} />

const SearchResults = props => {
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
    })
  }, [props.term])

  const refreshPage = () => {
    window.location.reload(false)
  }

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setLoading(false)
  //   }, 500)

  //   return () => {
  //     clearTimeout(handler)
  //   }
  // }, [])

  const firstArtObj = []
  const renderCards = () => {
    if (artist === '0 results found' || artist.length < 3) {
      return (
        <h5 className='search-word no-results'>
          0 results found
          <br />
          <button className='btn-home' onClick={refreshPage}>
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
      <div className='wrapper'>
        {renderCards()}
        {/* {!loading && renderCards()} */}
      </div>
    </>
  )
}

export default SearchResults
