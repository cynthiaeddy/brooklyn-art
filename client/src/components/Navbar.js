import '../stylesheets/Intro&Nav.css'

const Navbar = props => {
  let btnChange
  if (!props.introOpen) {
    btnChange = '?'
  } else {
    btnChange = 'X'
  }
  return (
    <div className='navbar'>
      <button className='btn-navbar' onClick={props.introOpenOnClick}>
        {btnChange}
      </button>
    </div>
  )
}

export default Navbar
