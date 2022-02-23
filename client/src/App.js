import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from 'react-router-dom'
import Search from './components/Search'
import ArtCard from './components/ArtCard'

function App() {
  let routes = (
    <Routes>
      <Route exact path='/' element={<Search />} />

      <Route path='/:title' element={<ArtCard />} />
    </Routes>
  )
  return (
    <Router>
      <div className='container'>{routes}</div>
    </Router>
  )
}

export default App
{
}
