import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigate} from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/Search.css'


const axios = require('axios')

const element = <FontAwesomeIcon icon={faHome} />

const SearchResults = ({term, searchTerm}) => {
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
      setLoading(false)
    })
  }, [term])

  const refreshPage = () => {
    window.location.reload(false)
  }


  return (
    <>
      {loading && <h5 className='loading'>loading...</h5>}
      {artist === '0 results found' || (artist.length < 3 && !loading) ? (
        <div className='no-results'>
          <h5> 0 results found </h5>
          <button className='btn-home' onClick={refreshPage}>
            {element}
          </button>
        </div>
      ) : (
        <>
          {!loading && (
            <>
              <div className='search-word'>
                <h5>Your Results </h5>
                <div className='search-word-input'>
                  <h3>{searchTerm}</h3>
                  </div>
                  <button onClick={refreshPage} className='btn-home '>{element}</button>
                </div>
                <Navigate
                  to={`/${searchTerm}`} state={ [artist, searchTerm ]}/>
            </>
          )}
        </>
      )}
    </>
  )
}

export default SearchResults
