import { useState } from 'react'
import Debounce from '../hooks/Debounce'
import '../stylesheets/Search.css'
import { Navigate } from 'react-router-dom'
import SearchResults from './SearchResults'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = Debounce(searchTerm, 1500)


  return (
    <div className='search'>
      {!debouncedSearchTerm ? (
          <div className='search-word'>
            <h5>
              search by <br />
              artist name{' '}
            </h5>
            <div className='search-word-input'>
              <input
                type='text'
                value={searchTerm}
                autoFocus
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
      ) : (
          <SearchResults
            term={debouncedSearchTerm}
            // changeBg={props.changeBg}
            searchTerm={searchTerm}
          />

      )}
    </div>
  )
}

export default Search
