import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import ArtistCard from './components/ArtistCard'
import ArtCard from './components/ArtCard'

function App() {
  let routes = (
    <Switch>
      <Route exact path='/'>
        <Search />
      </Route>
      <Route exact path='/search/:artist'>
        <SearchResults />
      </Route>
      <Route exact path='/businesses/:city'>
        <ArtistCard />
      </Route>

      <Route exact path='/:artist/:title'>
        <ArtCard />
      </Route>

      <Redirect to='/' />
    </Switch>
  )

  return (
    <Router>
      <div className='container'>{routes}</div>
    </Router>
  )
}

export default App
