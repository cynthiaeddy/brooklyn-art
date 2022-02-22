import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const ArtistCard = props => {
  const navigate = useNavigate()
  const art = props.art
  const [redirect, setRedirect] = useState(false)
  console.log('in artistcard props', props)
  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = captionSplit[0]
  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]

  const doSetRedirect = () => {
    setRedirect(true)
  }

  const renderRedirect = () => {
    if (redirect) {
      // navigate.push(
      //   `/${props.city.toLowerCase()}/${deleteNameSpace.toLowerCase()}`,
      //   { art: art }
      // )
    }
  }

  return (
    <div className='card'>
      {/* <div className='card' style={{ border: '.5px solid black' }}></div> */}
      <a href='#'>
        <div className='box'></div>
        <img src={props.img} style={{ width: '300px' }} />
        <h6>{name}</h6>
        <h6 style={{ marginBottom: '0', fontStyle: 'italic' }}>
          {titleName}
          <span style={{ fontStyle: 'normal' }}>{titleYear}</span>
        </h6>
      </a>
    </div>
  )
}

export default ArtistCard
