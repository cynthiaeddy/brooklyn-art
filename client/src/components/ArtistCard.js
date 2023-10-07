import { Link } from 'react-router-dom'
import '../stylesheets/Card.css'


const ArtistCard = ({caption, artistName, art, img}) => {



  const captionSplit = caption.replace(/(<([^>]+)>)/gi, '').split('.')

  const name = captionSplit[0]

  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]
  const title = captionSplit[1].split('(')[0].split(',')[0]

  const deleteNameSpace = title.replace(/\s+/g, '')

  return (
    <>
      <div className='card'>
        <Link
          to={`/${artistName}/${deleteNameSpace.toLowerCase()}`}
          state={{ from: art }}>
          <img
            src={`https://${img}`}
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
