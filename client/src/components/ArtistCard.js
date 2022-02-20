import React from 'react'

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
      {/* <img src={props.smImg} style={{ width: '500px' }} /> */}
      {props.caption}
    </div>
  )
}

export default Artist
