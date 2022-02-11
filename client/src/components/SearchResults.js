import { useState, useEffect } from 'react'

const SearchResults = props => {
  const [articles, setArticles] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  console.log('props.term', props.term)

  useEffect(() => {
    const term = props.term
    console.log('in useeffect', `/api, ${term}`)
    if (term) {
      setIsSearching(true)
      fetch(`/api, ${term}`)
        .then(res => res.json())
        // .then(console.log())
        .then(data => setArticles(data))
    }
    setIsSearching(false)
  }, [props.term])

  return <></>
}

export default SearchResults
