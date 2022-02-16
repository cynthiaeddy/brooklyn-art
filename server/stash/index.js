const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get(`/api:term`, async (req, res, next) => {
  const api_key = process.env.API_KEY
  const term = req.params.term
  console.log(term)

  await axios
    .get(`https://www.brooklynmuseum.org/api/v2/artist?name=${term}`, {
      headers: { api_key: api_key },
    })
    .then(response => {
      console.log('re', response)
      const artistId = response.data.data[0].id
      return axios.get(
        `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
        {
          headers: { api_key: api_key },
        }
      )
    })
    .then(response => {
      res.json(response.data)
    })
})

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
