const ArtistCard = props => {
  const captionSplit = props.caption.replace(/(<([^>]+)>)/gi, '').split('.')
  const name = captionSplit[0]
  const titleName = captionSplit[1].split(',')[0]
  const titleYear = captionSplit[1].split(',')[1]

  return (
    <div className='card'>
      <div className='box'></div>
      <img src={props.img} style={{ width: '300px' }} />
      <h6>{name}</h6>
      <h6 style={{ marginBottom: '0', fontStyle: 'italic' }}>
        {titleName}
        <span style={{ fontStyle: 'normal' }}>{titleYear}</span>
      </h6>
    </div>
  )
}

export default ArtistCard
