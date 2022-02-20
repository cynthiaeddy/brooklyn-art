import React from 'react'
import '../stylesheets/MasonryCard.css'

const MasonryCard = (props) => {
  const month_name = (dt) => {
    const mlist = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return mlist[dt.getMonth()]
  }
  const dateArr = props.date.split('/')
  const dateMonth = dateArr.slice(0, 1).join()
  const dateRest = dateArr.slice(1).join(', ')
  return (
    <>
      <div className='card'>
        <img className='card-img' src={props.image} alt='' />
        <h6>
          {' '}
          {month_name(new Date(dateMonth))}
          {'  '}
          {dateRest}
        </h6>
        <h2>
          <a href='#'>{props.title}</a>
        </h2>
        <p className='author-p'>
          Presented by <span>{props.author}</span>
        </p>
      </div>
    </>
  )
}

export default MasonryCard
