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
  // const img = articles && articles.images[0].b.url
  // const title = articles.title
  // console.log(articles.images)
  // let img = articles ? articles.images[0].b.url : 'loading'
  // }
  // const img = articles.filter(article => article.url[0])
  // console.log(img)
  return (
    <>
      {/* {<img src={articles && articles.images.map(image => image.b.url)} />} */}
      {/* <img
        src={article}
        className='Article-img'
        alt=''
        style={{
          width: '300px',
        }}
      /> */}
      {/* <h5>{title}</h5> */}
    </>
  )
}

export default SearchResults
