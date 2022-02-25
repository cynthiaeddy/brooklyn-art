import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from 'react-router-dom'
import { useState } from 'react'
import Search from './components/Search'
import ArtCard from './components/ArtCard'
import bkPic1 from './assets/32.845_PS2.jpg'
import bkPic2 from './assets/graphic.jpeg'
import bkPic3 from './assets/81.214_SL1.jpg'

function App() {
  const [bgImage, setBgImage] = useState('')
  console.log('me change', bgImage)
  // send function to searchresults to trigger bkimg change
  const changeBg = () => {
    const picArray = [bkPic1, bkPic2, bkPic3]
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
        {routes}
      </div>
    </Router>
  )
}

export default App
