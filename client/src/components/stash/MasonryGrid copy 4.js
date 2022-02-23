import ArtistCard from './ArtistCard'
import '../stylesheets/MasonryCard.css'

const MasonryGrid = props => {
  const firstArtObj = []
  const renderCards = () => {
    if (props.cards === '0 results found') {
      return <h4>0 results found</h4>
    } else {
      // console.log(props.cards)
      props.cards.map(
        artData => firstArtObj.push(artData.data[0]),
        console.log('here in artData')
      )

      firstArtObj.map(art => {
        console.log('here in firstArtmap', art, art.caption)

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
      console.log('after artist card')
    }
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
