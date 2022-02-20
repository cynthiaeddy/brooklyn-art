import React from 'react'

import Masonry from 'react-masonry-css'

//...

const Artist = props => {
  console.log(
    'inArtist, props.img',
    props.img,
    'props.caption',
    props.caption,
    'props',
    props
  )
  return (
    <div className='card'>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'>
        {/* array of JSX items */}
      </Masonry>
      {/* <img src={props.smImg} style={{ width: '500px' }} /> */}
      {props.caption}
    </div>
  )
}

export default Artist
