import Masonry from 'react-masonry-css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ArtistCard from './ArtistCard'
import { useNavigate, useLocation } from 'react-router-dom'
import '../stylesheets/Card.css'
import '../stylesheets/Masonry.css'
import '../stylesheets/Search.css'

const element = <FontAwesomeIcon icon={faHome} />

const ArtistContainer = ({changeBg}) => {

  const {state}  = useLocation()
  const navigate = useNavigate()

  const artistName = state[1]
  const artistArray = state[0]

  const navigateHome = () => {
    navigate('/')
    changeBg()
}

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  const renderCards = () => {
    const firstArtObj = []
    artistArray.map(artData => firstArtObj.push(artData.data[0]))
    return firstArtObj.map(art => {
      return (
        <ArtistCard
          caption={art.caption}
          key={art.id}
          img={art.largest_derivative_url}
          smImg={art.standard_size_url}
          art={art}/>
      )
    })
  }

  return (
      <div className='search'>
      <div className='search-word'>
        <h5>Your Results </h5>
        <div className='search-word-input'>
          <h3>{artistName}</h3>
        </div>
        <button onClick={navigateHome} className='btn-home '>{element}</button>
      </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'>
          {renderCards()}
        </Masonry>
      </div>
  )
}

export default ArtistContainer
