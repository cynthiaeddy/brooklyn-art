import { useState, useEffect } from 'react'
import Artist from './Artist'
const axios = require('axios')

const SearchResults = props => {
  const [artist, setArtist] = useState([])

  console.log('props.term', props.term)

  useEffect(() => {
    const term = props.term
    axios.get(`api/${term}`).then(response => {
      console.log(response, response.data)
      setArtist(response.data)
    })
  }, [props.term])
  console.log(artist, typeof artist)
  const individualArt = artist.map(art => {
    return art.data.map(artData => {
      console.log(artData)
      return (
        <Artist
          caption={artData.caption}
          key={artData.id}
          img={artData.largest_derivative_url}
          smImg={artData.standard_size_url}
          name={props.term}
        />
      )
    })
  })
  return (
    <div className='artist-container'>
      can say hi in search results
      {/* {artist.map(art => {
        return art.data.map(artData => {
          console.log('searchResults', artData)
          return (
            <Artist
              caption={artData.caption}
              key={artData.id}
              img={artData.largest_derivative_url}
              smImg={artData.standard_size_url}
              name={props.term}
            />
          )
        })
      })} */}
      <MasonryGrid
        text={this.state.articles.hero_text}
        cards={this.state.articles.cards}
      />
      {individualArt}
    </div>
  )
}

export default SearchResults
