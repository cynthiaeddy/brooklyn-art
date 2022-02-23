import ArtistCard from '../ArtistCard'

const MasonryGrid = props => {
  const firstArtObj = []
  const renderCards = () => {
    if (props.cards === '0 results found') {
      return <h4>0 results found</h4>
    }
    props.cards.map(artData => firstArtObj.push(artData.data[0]))

    return firstArtObj.map(art => {
      return (
        <ArtistCard
          caption={art.caption}
          key={art.id}
          img={art.largest_derivative_url}
          smImg={art.standard_size_url}
          art={art}
        />
      )
    })
  }
  return (
    <>
      <div className='masonry-container'>
        <div className='copy'></div>
        <div className='wrapper'>
          <div className='masonry bordered'>{renderCards()}</div>
        </div>
      </div>
    </>
  )
}

export default MasonryGrid
