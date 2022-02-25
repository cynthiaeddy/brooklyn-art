import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Search from './components/Search'
import bgPic1 from './assets/hero.jpg'
import bgPic2 from './assets/turner.jpg'
import bgPic3 from './assets/scribbles.jpg'
import bgPic4 from './assets/animals.jpg'
import bgPic5 from './assets/bwphoto.jpg'
import bgPic6 from './assets/nexthero.jpg'

function App() {
  const [bgImage, setBgImage] = useState(``)

  console.log('me change', bgImage)
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
    </Routes>
  )
  return (
    <Router>
      <div className='container' style={{ backgroundImage: bgImage }}>
        {routes}
      </div>
    </Router>
  )
}

export default App
