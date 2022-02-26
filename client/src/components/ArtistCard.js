import { Link } from 'react-router-dom'
import '../stylesheets/Card.css'

const ArtistCard = props => {
  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = captionSplit[0]
  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]
  const title = captionSplit[1].split('(')[0]

  const deleteNameSpace = title.replace(/\s+/g, '')

  return (
    <>
      <div className='card'>
        <Link
          to={`/${deleteNameSpace.toLowerCase()}`}
          state={{ from: props.art }}>
          <div className='box'></div>
          <img src={props.img} className='small-img' />
          <h6>{name}</h6>
          <h6 className='h6-italic'>
            {titleName}
            <span>{titleYear}</span>
          </h6>
        </Link>
      </div>
      {props.changeBg()}
    </>
  )
}

export default ArtistCard
