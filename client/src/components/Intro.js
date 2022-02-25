import { useState } from 'react'

const Intro = () => {
  const [visable, setVisable] = useState(true)

  const handleClick = () => {
    setVisable(false)
  }
  return (
    <div className='intro'>
      <button onClick={handleClick}></button>
      <h3>header</h3>
      <p>
        Lorem ipsum dolor sit amet, qui ut choro audiam. Cu saepe oporteat ius,
        no pri prima inani conclusionemque. Quem impedit molestiae est id.
        Explicari similique id duo, ex sonet necessitatibus qui. Sit ne solum
        fabulas. Vel ut partem commune, nostrum quaerendum in cum, id choro
        bonorum perpetua has. Copiosae menandri patrioque ut has, ullum pericula
        iracundia eu vim. Eirmod audiam erroribus mei eu. Sea in purto case
        alterum, at ius inani labitur epicuri, eos an ceteros eloquentiam. Sed
        altera minimum cu, et est utroque ponderum accommodare, melius bonorum
        ea vim. Has sonet scaevola ad, et graece graeco pri. Nec nihil nusquam
        maiestatis ex, sit mutat aeque te.
      </p>
    </div>
  )
}

export default Intro
