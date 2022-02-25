import { useState } from 'react'
import SearchResults from './SearchResults'
import Debounce from '../hooks/Debounce'

const Search = props => {
  console.log('search', props.changeBg)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = Debounce(searchTerm, 1000)

  return (
    <div className='Search'>
      {!debouncedSearchTerm ? (
        <div className='Search-input'>
          <div className='Search-word'>
            <h4>Search: </h4>
            <div className='Search-word-input'>
              <input
                type='text'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='Search-input'>
          <div className='Search-word'>
            <h4>Your Results: </h4>{' '}
            <div className='Search-word-input'>
              <h1>{searchTerm}</h1>
            </div>
          </div>
          <SearchResults term={debouncedSearchTerm} changeBg={props.changeBg} />
        </div>
      )}
    </div>
  )
}

export default Search
