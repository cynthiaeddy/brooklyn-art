import React from 'react'
import { useParams } from 'react-router-dom'

const ArtCard = () => {
  let { title } = useParams()
  return <div>Now showing {title}</div>
}

export default ArtCard
