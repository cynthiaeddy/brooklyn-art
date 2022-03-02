import { useState, useEffect } from 'react'
import '../stylesheets/Frontis.css'

const Frontis = () => {
  const [timePassed, setTimePassed] = useState(false)
  const snickers = true

  useEffect(() => {
    const handler = setTimeout(() => {
      setTimePassed(true)
    }, 4000)

    return () => {
      clearTimeout(handler)
    }
  }, [snickers])

  return (
    <>
      {!timePassed ? (
        <div className='frontis'>
          <div className='type'>
            <h1>The Brooklyn Art Museum Project</h1>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Frontis
