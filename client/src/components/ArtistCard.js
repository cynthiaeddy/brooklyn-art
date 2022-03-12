import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Card.css'
import { useParams } from 'react-router'

const ArtistCard = props => {
  // const deleteNameSpace = useParams().artCard
  const bgImage = ''
  const { changeBg } = props
  // console.log('in artist card, props', props)
  // console.log('in artist card props', props, deleteNameSpace)
  // const deleteNameSpace = props.name.replace(/\s+/g, '')

  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = captionSplit[0]
  const justName = captionSplit[0]
    .split(' (')[0]
    .toLowerCase()
    .replace(/\s+/g, '')

  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]
  const title = captionSplit[1].split('(')[0]

  const deleteNameSpace = title.replace(/\s+/g, '')
  // console.log('name', name)

  useEffect(_ => changeBg(bgImage), [bgImage])
  return (
    <>
      <div className='card'>
        <Link
          to={`/${justName}/${deleteNameSpace.toLowerCase()}`}
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
