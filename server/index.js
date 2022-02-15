const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get(`/api:term`, async (req, res, next) => {
  const api_key = process.env.API_KEY
  const api_key_cooper = process.env.COOPER_API_TOKEN

  // console.log(req.params)
  console.log('/api:term', api_key)
  const term = req.params.term
  console.log('term', term)

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

// ' + key
app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
