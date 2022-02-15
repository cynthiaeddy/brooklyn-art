const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get('/api', async (req, res, next) => {
  console.log('/api')
  const api_key = process.env.API_KEY
  const api_key_cooper = process.env.COOPER_API_TOKEN

  console.log(req.params)
  const term = req.params.term
  console.log(term)

  try {
    const response = await axios.get(
      // `https://www.brooklynmuseum.org/api/v2/artist?name=warhol`,
      // `https://www.brooklynmuseum.org/api/v2/collection/?folder=contemporary_art`,
      `https://www.brooklynmuseum.org/api/v2/artist?name=picasso`,
      {
        headers: { api_key: api_key },
      }
    )

    // console.log('in backend, response.data', response.data)
    res.json(response.data)
    // response.data.find(artist => artist.name === 'Ali Ashraf')
    // console.log(artist)
  } catch (error) {}
})

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
