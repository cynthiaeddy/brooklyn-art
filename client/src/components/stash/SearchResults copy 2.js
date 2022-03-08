import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ArtistCard from './ArtistCard'
import '../stylesheets/Search.css'
import '../stylesheets/Masonry.css'
import Masonry from 'react-masonry-css'

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
    // setLoading(false)
  }, [props.term])

  const refreshPage = () => {
    window.location.reload(false)
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  // console.log(props, 'props searchresults', artist)

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
    if (artist !== null && artist.length > 3) {
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
    } else if (artist === null || artist.length < 3) {
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
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'>
      {renderCards()}
    </Masonry>
  )
}

export default SearchResults
