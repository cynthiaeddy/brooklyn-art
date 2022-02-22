import ArtistCard from './ArtistCard'
import '../stylesheets/MasonryCard.css'

const MasonryGrid = props => {
  const renderCards = () => {
    let cardSort
    if (props.cards === '0 results found') {
      return <h4>0 results found</h4>
    } else {
      cardSort = props.cards.sort((a, b) => {
        if (a.data[0].date_added > b.data[0].date_added) {
          return -1
        }
        if (a.data[0].date_added < b.data[0].date_added) {
          return 1
        }
        return 0
      })
    }

    return cardSort.map(artData =>
      artData.data.map(art => {
        let fileNumber = art.filename.split('_')[0]
        console.log(fileNumber, art.object_id)
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
    )
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
