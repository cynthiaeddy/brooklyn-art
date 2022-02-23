import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ArtCard = () => {
  let title = useParams().title
  const location = useLocation()
  const { from } = location.state

  const cleanCaption = from.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  // const captionSplit = from.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = cleanCaption[0]
  const titleName = cleanCaption[1].split(',')[0]
  // const titleName = cleanCaption[1].split(' , ')[0]

  const titleYear = cleanCaption[1].split(',')[1]
  const titleOne = cleanCaption[1].split(' (')[0]
  const justName = cleanCaption[0].split(' (')[0]

  console.log(
    from,
    cleanCaption,
    name,
    justName,
    titleOne,
    titleYear,
    titleName
  )

  return (
    <div className='card indie'>
      <div className='box indie'></div>
      <h2 style={{ fontStyle: 'italic' }}>{titleName}</h2>
      <h3>{justName}</h3>
      {/* Now showing {title} */}
      <h6 style={{ textAlign: 'left', color: 'grey' }}>{cleanCaption}</h6>
    </div>
  )
}

export default ArtCard
