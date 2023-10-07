import '../stylesheets/Intro&Nav.css'
import bgPic1 from '../assets/turner.jpg'
import bgPic3 from '../assets/bwphoto.jpg'
import bgPic4 from '../assets/nexthero.jpg'
import bgPic5 from '../assets/bw.jpg'
import bgPic6 from '../assets/greatfoto.jpg'
import bgPic7 from '../assets/color.jpg'
import bgPic8 from '../assets/wheels.jpg'

const Intro = ({introOpen}) => {
  let classes = ['intro']
  if (introOpen) {
    classes = ['intro open']
  }

  return (
    <div className={classes}>
      <h3>Why oh why</h3>
      <h5>are these images so small? </h5>
      <p>you might ask.</p>
      <h5>brooklyn museum:</h5>
      <p>
        "This image is presented as a "thumbnail" because it is protected by
        copyright. The Brooklyn Museum respects the rights of artists who retain
        the copyright to their work."
      </p>
      <h5>therefore,</h5>
      <p>
        all of the images presented here are small. The random background images
        I selected are from various collections of the Brooklyn Museum (mainly
        contemporary) that weren't protected by said copyright.
      </p>
      <h5>I mainly created this app</h5>{' '}
      <p>
        to explore fetching api calls while gathering information about great
        art. The search critera only shows responses with images, as well as
        needing at least three characters in the search input.
      </p>
      <h5>for further information</h5>{' '}
      <p>
        about the individual background images please click it's image below.
      </p>
      <div className='bg-images'>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/415'>
          <img src={bgPic1} alt='moran' className='thumbnail' />
        </a>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/109820'>
          <img src={bgPic3} alt='salmieri' className='thumbnail' />
        </a>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/1639'>
          <img src={bgPic4} alt='thompson' className='thumbnail' />
        </a>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/122589'>
          <img src={bgPic5} alt='lynch' className='thumbnail' />
        </a>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/105135'>
          <img src={bgPic6} alt='resnick' className='thumbnail' />
        </a>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/148251'>
          <img src={bgPic7} alt='merkin' className='thumbnail' />
        </a>
        <a href='https://www.brooklynmuseum.org/opencollection/objects/82636'>
          <img src={bgPic8} alt='yoshida' className='thumbnail' />
        </a>
      </div>
    </div>
  )
}

export default Intro
