import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/Card.css'

const element = <FontAwesomeIcon icon={faHome} />

const ArtCard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { from } = location.state
  console.log(from.standard_size_url, 'in art card', from)

  const cleanCaption = from.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const titleName = cleanCaption[1].split(',')[0]
  const justName = cleanCaption[0].split(' (')[0]

  const routeChange = () => {
    let path = '/'
    navigate(path)
  }

  return (
    <div className='card indie'>
      <img
        src={`https://${from.standard_size_url}`}
        className='small-img'
        alt={titleName}
      />
      <div className='card indie-wrapper '>
        <h2>{titleName}</h2>
        <h3>{justName}</h3>
        <h6>{cleanCaption}</h6>
        <br />
        <button onClick={routeChange} className='btn-route-change'>
          {element}
        </button>
      </div>
    </div>
  )
}

export default ArtCard
