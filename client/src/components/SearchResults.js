import { useState, useEffect } from 'react'
const axios = require('axios')

const SearchResults = props => {
  const [artist, setArtist] = useState([])

  console.log('props.term', props.term)

  useEffect(() => {
    const term = props.term
    axios.get(`api${term}`).then(response => {
      // setArtistId(response.data.data[0].id)
      console.log(response.data.data)
    })
    // getArtist()
  }, [])

  return <></>
}

export default SearchResults
