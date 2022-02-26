import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa'

const Intro = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <div className='intro'>
        <button
          onClick={() => setToggle(!toggle)}
          className='btn-intro'
          style={{
            color: 'white',
            background: 'transparent',
            border: 'none',
            fontSize: '30px',
            zIndex: '20',
            marginTop: '20px',
          }}>
          {<FaQuestion />}
        </button>
        {toggle && (
          <>
            <h3>header</h3>
            <p>
              Lorem ipsum dolor sit amet, qui ut choro audiam. Cu saepe oporteat
              ius, no pri prima inani conclusionemque. Quem impedit molestiae
              est id. Explicari similique id duo, ex sonet necessitatibus qui.
              Sit ne solum fabulas. Vel ut partem commune, nostrum quaerendum in
              cum, id choro bonorum perpetua has. Copiosae menandri patrioque ut
              has, ullum pericula iracundia eu vim. Eirmod audiam erroribus mei
              eu. Sea in purto case alterum, at ius inani labitur epicuri, eos
              an ceteros eloquentiam. Sed altera minimum cu, et est utroque
              ponderum accommodare, melius bonorum ea vim. Has sonet scaevola
              ad, et graece graeco pri. Nec nihil nusquam maiestatis ex, sit
              mutat aeque te.
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default Intro
