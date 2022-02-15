const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get(`/api:term`, async (req, res, next) => {
  const api_key = process.env.API_KEY
  const term = req.params.term

  try {
    const response = await axios.get(
      `https://www.brooklynmuseum.org/api/v2/artist?name=${term}`,
      //   // `https://www.brooklynmuseum.org/api/v2/collection/?folder=contemporary_art`,
      //   // `https://www.brooklynmuseum.org/api/v2/collection/?folder=contemporary_art`,
      //   // `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=2019`,
      {
        headers: { api_key: api_key },
      }
    )

    res.json(response.data)
  } catch (error) {}
})

app.get(`/api:artistId`, async (req, res, next) => {
  const api_key = process.env.API_KEY
  const artistId = req.params.term

  try {
    const response = await axios.get(
      `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
      {
        headers: { api_key: api_key },
      }
    )

    res.json(response.data)
  } catch (error) {}
})

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
