import React from 'react'
import Masonry from 'react-masonry-css'
import ArtistCard from './ArtistCard'
import '../stylesheets/Search.css'
import '../stylesheets/Masonry.css'

const FakeResults = props => {
  console.log(props, 'in fake results')

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  const firstArtObj = []

  const renderCards = () => {
    props.artist.map(artData => firstArtObj.push(artData.data[0]))
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
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'>
      {renderCards()}
    </Masonry>
  )
}

export default FakeResults
