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

  const {state}  = useLocation()
  const navigate = useNavigate()
  // const { from } = location.state
  const bgImage = ''
  const { changeBg } = props
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(state, 'from, state in ArtistContainer card')

  const artistName = state[1]
  const artistArray = state[0]

  console.log(artistName, artistArray[0], artistArray[0].data,'artistName ,artistArray[0], artistArray[0].data,state in ArtistContainer card')


  // const foundArtist = from
  // useEffect(() => {
  //   axios.get(`api/${state[0]}`).then(response => {
  //     setArtist(response.data)
  //     setLoading(false)
  //   })
  // }, [])

  const navigateHome = () => {
  navigate('/')
}

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  const renderCards = () => {
    console.log(artistArray[0], artistArray[0].data, 'artistArray[0] in render cards')

    const firstArtObj = []
    artistArray[0].data.map(artData => {
      console.log(artData, artData[0], 'artData, artData[0]')
    return firstArtObj.push(artData)
    })
    console.log(firstArtObj, 'firstArtObj')
      // console.log(artData, 'artData'))
    //   firstArtObj.push(artData.data[0]))
    return firstArtObj.map(art => {
      console.log(firstArtObj, 'firstArtObj')
      return (
        <ArtistCard
          caption={art.caption}
          key={art.id}
          img={art.largest_derivative_url}
          smImg={art.standard_size_url}
          art={art}
          changeBg={props.changeBg}
          artistName={artistName}
        />
      )
    })
  }

  return (
            <>
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
      </>
  )
}

export default ArtistContainer
