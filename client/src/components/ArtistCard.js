import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Card.css'


const ArtistCard = props => {

  const bgImage = ''
  const { changeBg } = props


  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')

  const name = captionSplit[0]
  const justName = captionSplit[0]
    .split(' (')[0]
    .toLowerCase()
    .replace(/\s+/g, '')
  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]
  const title = captionSplit[1].split('(')[0].split(',')[0]

  const deleteNameSpace = title.replace(/\s+/g, '')

  useEffect(_ => changeBg(bgImage), [changeBg])
  return (
    <>

      <div className='card'>
        <Link
          to={`/${props.foundArtist}/${deleteNameSpace.toLowerCase()}`}
          state={{ from: props.art }}>
          <img
            src={`https://${props.img}`}
            className='small-img'
            alt={titleName}
          />

          <h6>{name}</h6>
          <h6 className='h6-italic'>
            {titleName}
            <span>{titleYear}</span>
          </h6>
        </Link>
      </div>
    </>
  )
}

export default ArtistCard
