import { useState, useEffect } from 'react'
const axios = require('axios')

const SearchResults = props => {
  const [article, setArticle] = useState([])
  const [title, setTitle] = useState([])
  const [artistId, setArtistId] = useState([])

  const [isSearching, setIsSearching] = useState(false)
  console.log('props.term', props.term)

  // useEffect(() => {
  //   axios.get('api').then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  useEffect(() => {
    const term = props.term
    axios.get(`api${term}`).then(response => {
      console.log(response.data)
    })
  }, [])

  return <></>
}

export default SearchResults
