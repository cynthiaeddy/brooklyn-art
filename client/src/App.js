import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import bgPic1 from './assets/turner.jpg'
import bgPic3 from './assets/bwphoto.jpg'
import bgPic4 from './assets/nexthero.jpg'
import bgPic5 from './assets/bw.jpg'
import bgPic6 from './assets/greatfoto.jpg'
import bgPic7 from './assets/color.jpg'
import bgPic8 from './assets/wheels.jpg'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import ArtCard from './components/ArtCard'
import Frontis from './components/Frontis'
import NotFound from './components/NotFound'
import SearchResults from './components/SearchResults'

function App() {
  const [bgImage, setBgImage] = useState('')
  const [introOpen, setIntroOpen] = useState(false)
  const [artist, setArtist] = useState([])
  console.log('in app', artist)

  const introOpenOnClick = () => {
    setIntroOpen(!introOpen)
  }

  // send function to searchresults to trigger bkimg change
  const changeBg = () => {
    const picArray = [bgPic1, bgPic3, bgPic4, bgPic5, bgPic6, bgPic7, bgPic8]

    const randomIndex = Math.floor(Math.random() * picArray.length)
    const selectbkImg = picArray[randomIndex]
    const bkImg = `url(${selectbkImg})`
    return setBgImage(bkImg)
  }

  let routes = (
    <Routes>
      <Route
        exact
        path='*'
        element={
          <Search changeBg={changeBg} setArtist={setArtist} artist={artist} />
        }
      />

      {/* <Route exact path='/' element={<Search changeBg={changeBg} />} /> */}
      {/* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
       */}
      {/* <Route
        path='/search'
        element={
          artist === '0 results found' || artist.length < 3 ? (
            <NotFound />
          ) : (
            <SearchResults />
          )
        }
      /> */}
      {/* <Route path='/:title' element={<ArtCard />} /> */}
      {/* <Route path='*' element={{ Error }} /> */}
    </Routes>
  )
  return (
    <Router>
      <Frontis />
      <div className='container' style={{ backgroundImage: bgImage }}>
        <Navbar introOpenOnClick={introOpenOnClick} introOpen={introOpen} />
        <Intro introOpen={introOpen} />
        {routes}
      </div>
    </Router>
  )
}

export default App
