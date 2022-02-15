import { useState, useEffect } from 'react'
const axios = require('axios')

const SearchResults = props => {
  const [article, setArticle] = useState([])
  const [title, setTitle] = useState([])
  const [artistId, setArtistId] = useState([])

  const [isSearching, setIsSearching] = useState(false)
  console.log('props.term', props.term)

  useEffect(() => {
    const term = props.term
    axios.get(`api${term}`).then(response => {
      // setArtistId(response.data.data[0].id)
      console.log(response.data)
    })
    // getArtist()
  }, [])

  return <></>
}

export default SearchResults
