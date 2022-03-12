import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Card.css'
import ArtCard from './ArtCard'
import { useParams } from 'react-router'
import { assert } from 'console'

const ArtistCard = props => {
  const artCard = useParams().artCard
  const bgImage = ''
  const { changeBg } = props
  const arts = props.art
  // console.log('in artist card, props', props, 'arts', arts)

  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = captionSplit[0]
  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]
  const title = captionSplit[1].split('(')[0]

  const deleteNameSpace = artCard.replace(/\s+/g, '')
  // console.log(name, titleName, titleYear, title)

  useEffect(_ => changeBg(bgImage), [changeBg])
  return (
    <>
      {/* const renderRedirect = () => {
    if (redirect) {
      history.push(
        `/${props.city.toLowerCase()}/${deleteNameSpace.toLowerCase()}`,
        { business: business }
      )
    }
  }
       */}
      {/* const renderRedirect = () => {
    if (redirect) {
      history.push(
        `/${props.city.toLowerCase()}/${deleteNameSpace.toLowerCase()}`,
        { business: business }
      )
    }
  }
       */}

      <div className='card'>
        <Link to={`/${deleteNameSpace.toLowerCase()}`}>
          {/* <ArtCard
            name={name}
            titleName={titleName}
            titleYear={titleYear}
            title={title}
            img={props.img}
          /> */}
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
