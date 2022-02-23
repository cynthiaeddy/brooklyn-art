import ArtistCard from './ArtistCard'
import '../stylesheets/MasonryCard.css'

const MasonryGrid = props => {
  const renderCards = () => {
    if (props.cards === '0 results found') {
      return <h4>0 results found</h4>
    } else {
      // console.log('masonry', props.cards)
      // props.cards.map(card => {
      //   console.log(card.object_id)
      // })
      cardSort = props.cards.sort((a, b) => {
        if (a.data[0].date_added > b.data[0].date_added) {
          return -1
        }
        if (a.data[0].date_added < b.data[0].date_added) {
          return 1
        }
        return 0
      })

      // for (let i = 0; i < props.cards.length; i++) {
      //   console.log('oin', props.card[i])
      // }
      let cardSorted
      return cardSort.map(artData =>
        artData.data.filter(arted => {
          return arted.object_id !== object_id

          // let fileNumber = art.filename.split('_')[0]
          // console.log(fileNumber, art.object_id, cardSorted)

          // myArray = myArray.filter(function( obj ) {
          //   return obj.id !== id;
          // });
        })
      )
    }
  }
  cardSort.map(art => {
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
