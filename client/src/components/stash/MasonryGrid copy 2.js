import ArtistCard from './ArtistCard'
import '../stylesheets/MasonryCard.css'

const MasonryGrid = props => {
  const renderCards = () => {
    let cardSort = []
    if (props.cards === '0 results found') {
      return <h4>0 results found</h4>
    } else {
      return props.cards.map(artData =>
        artData.data.map(art => {
          // console.log(cardSort.indexOf(art.object_id))
          if (cardSort.indexOf(art.object_id)) {
            cardSort.push(art)
          }
          console.log(cardSort)
          // return cardSort.map(a => {
          //   return (
          //     <ArtistCard
          //       caption={a.caption}
          //       key={a.id}
          //       img={a.largest_derivative_url}
          //       smImg={a.standard_size_url}
          //       art={a}
          //     />
          //   )
          // })
        })
      )
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
