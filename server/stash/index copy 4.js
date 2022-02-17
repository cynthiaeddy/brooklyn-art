const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get(`/api/:term`, async (req, res, next) => {
  const api_key = process.env.API_KEY
  const term = req.params.term

  await axios
    .get(`https://www.brooklynmuseum.org/api/v2/artist?name=${term}`, {
      headers: { api_key: api_key },
    })
    .then(response => {
      const artistId = response.data.data[0].id
      return axios.get(
        `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
        {
          headers: { api_key: api_key },
        }
      )
    })

    .then(response => {
      axios
        .all(
          response.data.data.map(obj => {
            console.log(obj.id)
            axios.get(
              `https://www.brooklynmuseum.org/api/v2/object/${obj.id}/image`,
              {
                headers: { api_key: api_key },
              }
            )
          })
        )
        .then(
          axios.spread(function (...response) {
            // all requests are now complete
            console.log('resp', response)
          })
        )
    })
})
// })

// let linksArr = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments'];

// axios.all(linksArr.map(l => axios.get(l)))
//   .then(axios.spread(function (...res) {
//     // all requests are now complete
//     console.log(res);
//   }));

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
