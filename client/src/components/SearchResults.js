import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import ArtistResults from './ArtistResults'
import { useParams } from 'react-router'
import '../stylesheets/Search.css'

const axios = require('axios')

const SearchResults = props => {
  console.log(props, 'in search results')
  let artRoute = useParams().artist
  let { artist } = useParams()
  console.log(artist, artRoute)

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      props.setArtist(response.data)
    })
  }, [props.term])
  console.log('in search results', props.artist, props.artist.data, props.term)
  artist = props.term
  console.log(artist)

  return (
    <>
      <Routes>
        {/* {props.artist === '0 results found' || props.artist.length < 3 ? (
          <Route path='/' element={<NotFound />} />
        ) : (
          <Route
            path={`/${artist}`}
            element={
              <ArtistResults artist={props.artist} changeBg={props.changeBg} />
            }
          />
        )} */}

        <Route
          path='/'
          element={
            props.artist === '0 results found' || props.artist.length < 3 ? (
              <NotFound />
            ) : (
              <ArtistResults artist={props.artist} changeBg={props.changeBg} />
            )
          }
        />
      </Routes>
    </>
  )
}

export default SearchResults
