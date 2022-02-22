import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ArtCard = () => {
  let title = useParams().title
  const location = useLocation()
  const { from } = location.state

  console.log(from)

  return <div>Now showing {title}</div>
}

export default ArtCard
