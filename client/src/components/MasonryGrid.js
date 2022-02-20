import React from 'react'
import ArtistCard from './ArtistCard'
import '../stylesheets/MasonryCard.css'

const MasonryGrid = props => {
  const renderCards = () => {
    console.log('in render cards', props.cards, props.cards.data)
    const cardSort = props.cards.sort((a, b) => {
      console.log('a', a.data[0].date_added)
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
        // console.log(
        console.log('in cardsort', artData)
      //   cardSort,
      //   cardSort.data

      //   // artData,
      //   // artData.data,
      //   // artData.data[0]
      // )
      // <ArtistCard
      //   caption={artData.caption}
      //   key={artData.id}
      //   img={artData.largest_derivative_url}
      //   smImg={artData.standard_size_url}
      //   name={props.term}
      // />
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
