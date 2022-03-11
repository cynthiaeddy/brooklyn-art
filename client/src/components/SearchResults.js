import { useEffect } from 'react'
import NotFound from './NotFound'
import FakeResults from './FakeResults'

import '../stylesheets/Search.css'
import '../stylesheets/Masonry.css'
import { Route, Routes } from 'react-router-dom'

const axios = require('axios')

const SearchResults = props => {
  console.log(props, 'in search results')

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      props.setArtist(response.data)
    })
  }, [props.term])

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            props.artist === '0 results found' || props.artist.length < 3 ? (
              <NotFound />
            ) : (
              <FakeResults artist={props.artist} changeBg={props.changeBg} />
            )
          }
        />
      </Routes>
    </>
  )
}

export default SearchResults
