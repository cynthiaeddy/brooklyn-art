import { useState, useEffect } from 'react'
import '../stylesheets/Frontis.css'

const Frontis = () => {
  const [timePassed, setTimePassed] = useState(false)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const handler = setTimeout(() => {
      setTimePassed(true)
    }, 4000)

    return () => {
      clearTimeout(handler)
    }
  }, [])

  useEffect(() => {
    if (window.sessionStorage.getItem('firstLoadDone') === null) {
      setAnimate(true)
      window.sessionStorage.setItem('firstLoadDone', 1)
    } else {
      setAnimate(false)
    }
  }, [])

  return (
    <>
      {animate && !timePassed ? (
        <div className='frontis'>
          <div className='type'>
            <h1>
              The <br />
              Brooklyn <br />
              Art
              <br /> Museum <br />
              Project
            </h1>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Frontis
