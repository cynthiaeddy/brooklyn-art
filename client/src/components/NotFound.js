import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const element = <FontAwesomeIcon icon={faHome} />

const NotFound = () => {
  const navigate = useNavigate()

  const refreshPage = () => {
    window.location.reload(false)
  }
  return (
    <div>
      NotFound
      <h5 className='search-word no-results'>
        0 results found
        <br />
        <button className='btn-home' onClick={refreshPage}>
          {element}
        </button>
      </h5>
    </div>
  )
}

export default NotFound
