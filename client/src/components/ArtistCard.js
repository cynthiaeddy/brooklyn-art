import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import '../stylesheets/Card.css'
const axios = require('axios')


const ArtistCard = props => {
  const [artist, setArtist] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const { from } = location.state
  const bgImage = ''
  const { changeBg } = props
  console.log(from, changeBg, props, 'from in artist card')


  useEffect(() => {
    const term = from
    axios.get(`api/${term}`).then(response => {
      setArtist(response.data)
      setLoading(false)
    })
  }, [from])
  console.log(artist, 'artist in artist card')

  // const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  // const name = captionSplit[0]
  // const justName = captionSplit[0]
  //   .split(' (')[0]
  //   .toLowerCase()
  //   .replace(/\s+/g, '')
  // const titleName = captionSplit[1].split(',')[0]
  // const titleYear = captionSplit[1].split(',')[1]
  // const title = captionSplit[1].split('(')[0].split(',')[0]

  // const deleteNameSpace = title.replace(/\s+/g, '')

  // useEffect(_ => changeBg(bgImage), [changeBg])
  return (
    <>
      hi
      {/* <div className='card'>
        <Link
          to={`/${justName}/${deleteNameSpace.toLowerCase()}`}
          state={{ from: props.art }}>
          <img
            src={`https://${props.img}`}
            className='small-img'
            alt={titleName}
          />

          <h6>{name}</h6>
          <h6 className='h6-italic'>
            {titleName}
            <span>{titleYear}</span>
          </h6>
        </Link>
      </div> */}
    </>
  )
}

export default ArtistCard
