import { useState } from 'react'
import SearchResults from './SearchResults'
import Debounce from '../hooks/Debounce'
import '../stylesheets/Search.css'

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = Debounce(searchTerm, 1500)

  return (
    <div className='search'>
      {!debouncedSearchTerm ? (
        <>
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
        </>
      ) : (
        <>
          {/* <div className='search-word'>
            <h5>Your Results </h5>{' '}
            <div className='search-word-input'>
              <h3>{searchTerm}</h3>
            </div>
          </div> */}

          <SearchResults
            term={debouncedSearchTerm}
            changeBg={props.changeBg}
            searchTerm={searchTerm}
          />
        </>
      )}
    </div>
  )
}

export default Search
