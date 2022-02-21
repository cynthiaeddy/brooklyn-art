import React from 'react'

//...
const ArtistCard = props => {
  console.log(props.caption, props.caption.split('.'))
  const captionSplit = props.caption.split('.')
  console.log(captionSplit[0], captionSplit[1].split('<em>'))

  const title = captionSplit[1].replace(/(<([^>]+)>)/gi, '')

  // console.log(
  //   'inArtistCard, props.img',
  //   props.img,
  //   'props.caption',
  //   props.caption,
  //   'props',
  //   props
  // )
  return (
    <div className='card'>
      <div className='box'></div>
      <h4>{title}</h4>
    </div>
  )
}

export default ArtistCard
