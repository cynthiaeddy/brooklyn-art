import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ArtCard from './components/ArtCard'
import Search from './components/Search'
import bgPic1 from './assets/hero.jpg'
import bgPic2 from './assets/turner.jpg'
import bgPic3 from './assets/scribbles.jpg'
import bgPic4 from './assets/birds.jpg'
import bgPic5 from './assets/bwphoto.jpg'
import bgPic6 from './assets/nexthero.jpg'
import Intro from './components/Intro'
import Navbar from './components/Navbar'

function App() {
  const [bgImage, setBgImage] = useState('')
  const [introOpen, setIntroOpen] = useState(false)

  const introOpenOnClick = () => {
    setIntroOpen(!introOpen)
  }

  // send function to searchresults to trigger bkimg change

  const changeBg = () => {
    const picArray = [bgPic1, bgPic2, bgPic3, bgPic4, bgPic5, bgPic6]
    const randomIndex = Math.floor(Math.random() * picArray.length)
    const selectbkImg = picArray[randomIndex]
    const bkImg = `url(${selectbkImg})`
    return setBgImage(bkImg)
  }

  let routes = (
    <Routes>
      <Route exact path='/' element={<Search changeBg={changeBg} />} />
      <Route path='/:title' element={<ArtCard />} />
    </Routes>
  )
  return (
    <Router>
      <div className='container' style={{ backgroundImage: bgImage }}>
        <Navbar introOpenOnClick={introOpenOnClick} introOpen={introOpen} />
        <Intro introOpen={introOpen} />
        {routes}
      </div>
    </Router>
  )
}

export default App
