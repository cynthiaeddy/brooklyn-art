const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get('/api', async (req, res, next) => {
  console.log('/api')
  const api_key = process.env.API_KEY
  console.log(req.params)
  const term = req.params.term
  console.log(term)

  try {
    const response = await axios.get(
      `https://www.brooklynmuseum.org/api/v2/artist?name=warhol`,
      {
        headers: { api_key: api_key },
      }
    )

    // `https://newrepublic.com/api/articles?q=${term}&filters[status]=PUBLISHED&fields[0]=id&fields[1]=nid&fields[2]=slug&fields[3]=title&fields[4]=authors.name,slug&fields[6]=publishedAt&fields[7]=status&fields[8]=ledeImage&fields[9]=ledeAltImage&fields[10]=url&fields[11]=urlFull&fields[12]=sponsor&fields[13]=deck&limit=${limit}&offset=${offset}`

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
