import React from 'react'
import Masonry from 'react-masonry-css'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ArtistCard from './ArtistCard'
import { Navigate } from 'react-router-dom'

import '../stylesheets/Search.css'
import '../stylesheets/Masonry.css'

const ArtistResults = props => {
  const artCard = useParams().artCard

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
      const captionSplit = art.caption.replace(/(<([^>]+)>)/gi, '').split('.')
      const justName = captionSplit[0]
        .split(' (')[0]
        .toLowerCase()
        .replace(/\s+/g, '')

      return (
        <>
          <ArtistCard
            caption={art.caption}
            key={art.id}
            img={art.largest_derivative_url}
            smImg={art.standard_size_url}
            art={art}
            changeBg={props.changeBg}
          />
          {/* <Navigate to={`/search/${justName}`} /> */}
        </>
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

export default ArtistResults
