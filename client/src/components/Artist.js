import { useState, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import ArtistCard from './ArtistCard'
const axios = require('axios')


const Artist = (props) => {
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(props,'in artist props')

  // useEffect(() => {
  //   const term = props.term
  //   axios.get(`api/${term}`).then(response => {
  //     setArtist(response.data)
  //     setLoading(false)
  //   })
  // }, [props.term])

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
  //         // changeBg={props.changeBg}
  //       />
  //     )
  //   })
  // }
  return (
    <div>
      {/* <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'>
                {renderCards()}
                  </Masonry> */}
<h3>hi</h3>
    </div>
  )
}

export default Artist
