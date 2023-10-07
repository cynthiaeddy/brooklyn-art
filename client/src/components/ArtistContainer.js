import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import '../stylesheets/Card.css'
import '../stylesheets/Masonry.css'
const axios = require('axios')


const element = <FontAwesomeIcon icon={faHome} />



const ArtistContainer = props => {

  const location = useLocation()
  const navigate = useNavigate()
  const { from } = location.state
  const bgImage = ''
  const { changeBg } = props
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(from, 'from in ArtistContainer card')

  const foundArtist = from
  useEffect(() => {
    // const term = props.term
    axios.get(`api/${foundArtist}`).then(response => {
      setArtist(response.data)
      setLoading(false)
    })
  }, [foundArtist])

  console.log(foundArtist, artist, 'foundArtist, artist')
  // console.log(location, props.searchTerm, 'location, props.searchTerm in container')
  // console.log(props.searchTerm, 'props.searchTerm,, props.searchTerm in container')



  const refreshPage = () => {
    window.location.reload(false)
  }
  console.log(ArtistContainer, 'ArtistContainer in ArtistContainer card')


  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  const renderCards = () => {
    const firstArtObj = []
    artist.map(artData => firstArtObj.push(artData.data[0]))
    console.log( firstArtObj,'ArtistContainer, firstArtObj')
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
              <div className='search-word'>
                <h5>Your Results </h5>
                <div className='search-word-input'>
                  <h3>{foundArtist}</h3>
                  </div>
                  <button onClick={refreshPage} className='btn-home '>{element}</button>
      </div>
      {!loading && <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'>
        {renderCards()}
      </Masonry>}
            </>

  )



}

export default ArtistContainer
