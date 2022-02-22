import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Search from './components/Search'

function App() {
  let routes = (
    <Route exact path='/'>
      <Search />
    </Route>
  )
  return (
    <Router>
      <div className='container'>{routes}</div>
    </Router>
  )
}

export default App
