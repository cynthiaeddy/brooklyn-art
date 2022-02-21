import React from 'react'
import ArtistCard from './ArtistCard'
import '../stylesheets/MasonryCard.css'

const MasonryGrid = props => {
  const renderCards = () => {
    // console.log('in render cards', props.cards, props.cards.data)
    const cardSort = props.cards.sort((a, b) => {
      // console.log('a', a.data[0].date_added)
      if (a.data[0].date_added > b.data[0].date_added) {
        return -1
      }
      if (a.data[0].date_added < b.data[0].date_added) {
        return 1
      }
      return 0
    })
    // return cardSort.map(artData =>
    //   // artData.data
    //   artData.data.filter(
    //     (art, ind) =>
    //       // let fileNumber = art.filename.split('_')[0]
    //       ind ===
    //       artData.data.findIndex(
    //         art =>
    //           art.filename.split('_')[0] === art.filename.split('_')[0] &&
    //           art.id === art.id
    //         // <ArtistCard/>
    //         // <ArtistCard
    //         //   caption={art.caption}
    //         //   key={art.id}
    //         //   img={art.largest_derivative_url}
    //         //   smImg={art.standard_size_url}
    //         // />
    //       )
    //   )
    // )
    return cardSort.map(artData =>
      artData.data.map(art => {
        console.log(
          'artdata map',
          art,
          art.filename,
          typeof art.filename,
          art.filename.split('_'),
          art.filename.split('_')[0]
        )
        let fileNumber = art.filename.split('_')[0]
        return (
          <ArtistCard
            caption={art.caption}
            key={art.id}
            img={art.largest_derivative_url}
            smImg={art.standard_size_url}
          />
        )
      })
    )
  }

  console.log('in masonry, props', props)

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
