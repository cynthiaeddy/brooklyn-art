import { useState, useEffect } from 'react'
const axios = require('axios')

const SearchResults = props => {
  const [articles, setArticles] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  console.log('props.term', props.term)

  useEffect(() => {
    const term = props.term
    console.log('in useeffect', `/api`)
    // if (term) {
    setIsSearching(true)
    axios.get(`/api`).then(response => {
      console.log(response.data)
    })
    // fetch(`/api`)
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    // .then(data => setArticles(data.data))
    // }
    // setIsSearching(false)
    // setArticles(data.data)
  }, [props.term])
  console.log(articles)
  return <></>
}

export default SearchResults
