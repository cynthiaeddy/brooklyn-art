import React from 'react'

//...
const ArtistCard = props => {
  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const title = captionSplit[1]
  const medium = captionSplit[2]

  return (
    <div className='card'>
      <div className='box'></div>
      <h4 style={{ marginBottom: '0' }}>{title}</h4>
      <h5 style={{ margin: '0' }}>{medium}</h5>
    </div>
  )
}

export default ArtistCard
