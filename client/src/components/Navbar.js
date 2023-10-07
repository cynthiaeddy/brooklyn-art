import '../stylesheets/Intro&Nav.css'

const Navbar = ({introOpen, introOpenOnClick}) => {
  let btnChange
  if (!introOpen) {
    btnChange = '?'
  } else {
    btnChange = 'X'
  }
  return (
    <div className='navbar'>
      <button className='btn-navbar' onClick={introOpenOnClick}>
        {btnChange}
      </button>
    </div>
  )
}

export default Navbar
