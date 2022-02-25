import { useState } from 'react'
import bkPic1 from '../assets/32.845_PS2.jpg'
import bkPic2 from '../assets/graphic.jpeg'
import bkPic3 from '../assets/81.214_SL1.jpg'

const RandomBkImg = () => {
  const picArray = [bkPic1, bkPic2, bkPic3]
  const randomIndex = Math.floor(Math.random() * picArray.length)
  const selectbkImg = picArray[randomIndex]
  const bkImg = `url(${selectbkImg})`

  // className='getBkImg'
  // backgroundImage: `url(${selectedPicture})`,

  // function randombg() {
  //   var random = Math.floor(Math.random() * 6) + 0
  //   var bigSize = [
  //     "url('http://placehold.it/300&text=banner1')",
  //     "url('http://placehold.it/300&text=banner2')",
  //     "url('http://placehold.it/300&text=banner3')",
  //     "url('http://placehold.it/300&text=banner4')",
  //     "url('http://placehold.it/300&text=banner5')",
  //     "url('http://placehold.it/300&text=banner6')",
  //   ]
  //   document.getElementById('random').style.backgroundImage = bigSize[random]
  // }

  return <div>RandomBkImg {bkImg}</div>
}

export default RandomBkImg
