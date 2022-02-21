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
    return cardSort.map(
      artData =>
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
          // if(fileNumber !== )
          return (
            <ArtistCard
              caption={art.caption}
              key={art.id}
              img={art.largest_derivative_url}
              smImg={art.standard_size_url}
            />
          )
        })
      // console.log(
      // console.log('in cardsort', artData, cardSort.data, artData.data)
      //   cardSort,
      //   cardSort.data

      //   // artData,
      //   // artData.data,
      //   // artData.data[0]
      // )
    )
  }

  // month_name = function (dt) {
  //   const mlist = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December',
  //   ]
  //   return mlist[dt.getMonth()]
  // }
  // render() {
  //   if (!this.props.text) {
  //     return null
  //   }
  //   const titleArr = this.props.text.title.split(' ')
  //   const firstLine = titleArr.slice(0, 1).join()
  //   const secondLine = titleArr.slice(1).join(' ')
  //   const dateArr = this.props.text.date.split('/')
  //   const dateMonth = dateArr.slice(0, 1).join()
  //   const dateRest = dateArr.slice(1).join(', ')
  console.log('in masonry, props', props)

  return (
    <>
      <div className='masonry-container'>
        <div className='copy'>
          {/* <h1>
              {firstLine}
              <br />
              {secondLine}
            </h1> */}
          {/* <h3>
              {this.month_name(new Date(dateMonth))}
              {'  '}
              {dateRest}
            </h3> */}

          {/* <p className='pHero'>{this.props.text.subtitle}</p> */}
        </div>
        <div className='wrapper'>
          <div className='masonry bordered'>{renderCards()}</div>
        </div>
      </div>
    </>
  )
}

export default MasonryGrid
