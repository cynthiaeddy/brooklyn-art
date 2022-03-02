import '../stylesheets/Intro&Nav.css'

const Intro = props => {
  let classes = ['intro']
  if (props.introOpen) {
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
    </div>
  )
}

export default Intro
