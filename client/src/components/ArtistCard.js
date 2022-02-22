import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ArtistCard = props => {
  const navigate = useNavigate()
  const art = props.art
  console.log(props)
  const [redirect, setRedirect] = useState(false)
  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = captionSplit[0]
  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]
  const shortTitle = captionSplit[1].split('(')[0]
  console.log(shortTitle)

  // const deleteNameSpace = props.name.replace(/\s+/g, '')

  const doSetRedirect = () => {
    setRedirect(true)
  }

  const renderRedirect = () => {
    // if (redirect) {
    //   navigate(
    //     `/${shortTitle.toLowerCase()}/${deleteNameSpace.toLowerCase()}`,
    //     { art: art }
    //   )
    // }
  }

  return (
    <div className='card'>
      {renderRedirect()}
      <div onClick={doSetRedirect} style={{ cursor: 'pointer' }}>
        <div className='box'></div>
        <img src={props.img} style={{ width: '300px' }} />
        <h6>{name}</h6>
        <h6 style={{ marginBottom: '0', fontStyle: 'italic' }}>
          {titleName}
          <span style={{ fontStyle: 'normal' }}>{titleYear}</span>
        </h6>
      </div>
    </div>
  )
}

export default ArtistCard
