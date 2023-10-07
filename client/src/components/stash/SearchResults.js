import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Masonry from 'react-masonry-css'
import ArtistCard from './ArtistCard'
import Artist from './Artist'
import '../stylesheets/Search.css'
import '../stylesheets/Masonry.css'


const axios = require('axios')

const element = <FontAwesomeIcon icon={faHome} />

const SearchResults = props => {
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(props, 'props in search results')

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
      setLoading(false)
    })
  }, [props.term])

  const refreshPage = () => {
    window.location.reload(false)
  }
  const navigate = useNavigate()

  console.log(artist, 'artist in search results')


  // const breakpointColumnsObj = {
  //   default: 4,
  //   1100: 3,
  //   700: 2,
  //   500: 1,
  // }
  // const renderCards = () => {
  //   const firstArtObj = []
  //   artist.map(artData => firstArtObj.push(artData.data[0]))
  //   console.log(artist, firstArtObj,'artist, firstArtObj')
  //   return firstArtObj.map(art => {
  //     return (
  //       <ArtistCard
  //         caption={art.caption}
  //         key={art.id}
  //         img={art.largest_derivative_url}
  //         smImg={art.standard_size_url}
  //         art={art}
  //         changeBg={props.changeBg}
  //       />
  //     )
  //   })
  // }

  return (
    <>
      {loading && <h5 className='loading'>loading...</h5>}
      {artist === '0 results found' || (artist.length < 3 && !loading) ? (
        <div className='no-results'>
          <h5> 0 results found </h5>
          <button className='btn-home' onClick={refreshPage}>
            {element}
          </button>
        </div>
      ) : (
        <>
          {!loading && (
            <>
              <div className='search-word'>
                <h5>Your Results </h5>
                <div className='search-word-input'>
                  <h3>{props.searchTerm}</h3>
                  </div>
                  <button onClick={refreshPage} className='btn-home '>{element}</button>
                </div>
                <Navigate
                  to={`/${props.searchTerm}`} state={{ from: artist,  }}/>

            </>
          )}
        </>
      )}
    </>
  )
}

export default SearchResults
