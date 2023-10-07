import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

import '../stylesheets/Card.css'

const element = <FontAwesomeIcon icon={faHome} />
const goaway = <FontAwesomeIcon icon={ faCircleArrowLeft } />

const ArtCard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { from } = location.state
  const cleanCaption = from.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const titleName = cleanCaption[1].split(',')[0]
  const justName = cleanCaption[0].split(' (')[0]


  const routeChange = () => {
    navigate('/')
  }
  const goBack = () => {
    navigate(-1)
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
        <button onClick={goBack} className='btn-route-change'>{goaway}</button>
      </div>
    </div>
  )
}

export default ArtCard
