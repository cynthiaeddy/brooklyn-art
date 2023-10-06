import { useState } from 'react'
import SearchResults from './SearchResults'
import Debounce from '../hooks/Debounce'
import '../stylesheets/Search.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = Debounce(searchTerm, 1500)
  const navigate = useNavigate()


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
          <>
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
