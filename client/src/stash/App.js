import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
function App() {
  // useEffect(() => {
  //   $.ajax({
  //     url: 'https://www.brooklynmuseum.org/api/v2/archive/collection/',
  //     type: 'GET',
  //     beforeSend: function (xhr) {
  //       xhr.setRequestHeader('api_key', '')
  //     },
  //     dataType: 'json',
  //     // success: function(data) { console.dir((data.source)); },

  //     // data: $.param({}),
  //     success: function (data) {
  //       console.log(data)
  //     },
  //     error: function () {},
  //   })
  // }, [])
  // useEffect(() => {
  //   axios
  //     .get('https://www.brooklynmuseum.org/api/v2/artist/', {
  //       headers: {
  //         api_key: 'yYtzg9Nf7DkA95ZSXhb17YJBTUHoLEGP',
  //         artist: 'Warhol',
  //       },
  //     })
  //     .then(resp => {
  //       console.log(resp)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])
  return <div className='App'></div>
}

export default App
