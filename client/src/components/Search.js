import { useState } from 'react'
import SearchResults from './SearchResults'
import Debounce from '../hooks/Debounce'

const Search = props => {
  console.log('search', props.changeBg)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = Debounce(searchTerm, 1000)

  return (
    <div className='search'>
      {!debouncedSearchTerm ? (
        <div className='search-input'>
          <div className='search-word'>
            <h5>Search </h5>
            <div className='search-word-input'>
              <input
                type='text'
                value={searchTerm}
                autoFocus
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='search-input'>
          <div className='search-word'>
            <h5>Your Results </h5>{' '}
            <div className='search-word-input'>
              <h3>{searchTerm}</h3>
            </div>
          </div>

          <SearchResults
            term={debouncedSearchTerm}
            changeBg={props.changeBg}
            searchTerm={searchTerm}
          />
        </div>
      )}
    </div>
  )
}

export default Search
