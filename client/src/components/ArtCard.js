import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHome} />

const ArtCard = () => {
  console.log('im in artcard')
  const location = useLocation()
  const navigate = useNavigate()
  const { from } = location.state

  const cleanCaption = from.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const titleName = cleanCaption[1].split(',')[0]
  const justName = cleanCaption[0].split(' (')[0]

  const routeChange = () => {
    let path = '/'
    navigate(path)
  }

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
        <br /> <br />
      </h6>
      <button
        onClick={routeChange}
        style={{
          marginTop: '10px',
          color: 'black',
          border: 'none',
          textAlign: 'center',
          background: 'none',
        }}>
        {element}
      </button>
    </div>
  )
}

export default ArtCard
