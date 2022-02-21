import React from 'react'

//...
const ArtistCard = props => {
  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const title = captionSplit[1]
  const medium = captionSplit[2]
  const all = props.caption.replace(/(<([^>]+)>)/gi, '').split('"')
  const allS = all[0].toString().split('.')
  console.log('all', all, 'allS', allS)
  const alle = allS.slice(2, 5).join()
  console.log('alle', alle)

  return (
    <div className='card'>
      <div className='box'></div>
      <h4 style={{ marginBottom: '0' }}>{title}</h4>
      <h5 style={{ margin: '0' }}>{medium}</h5>
      {/* <h6>{alle}</h6> */}
    </div>
  )
}

export default ArtistCard
