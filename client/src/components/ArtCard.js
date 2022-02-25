import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ArtCard = () => {
  let title = useParams().title
  const location = useLocation()
  const { from } = location.state

  const cleanCaption = from.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const titleName = cleanCaption[1].split(',')[0]
  const justName = cleanCaption[0].split(' (')[0]

  return (
    <div className='card indie'>
      <div className='box indie'></div>
      <h2 style={{ fontStyle: 'italic' }}>{titleName}</h2>
      <h3>{justName}</h3>
      <h6 style={{ textAlign: 'left', color: 'grey' }}>
        {cleanCaption}
        <br />
        <br></br>
        Why is the image so small? because it's copywrited blurb here
      </h6>
    </div>
  )
}

export default ArtCard
