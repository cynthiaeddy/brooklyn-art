const express = require('express')
const axios = require('axios')
require('dotenv').config()
import { useState, useEffect } from 'react'

const PORT = process.env.PORT || 3005

const app = express()

const newInfo = {
  city: cityInfo.data.results[0].address_components[0].short_name,
  weather: weatherInfo.data.currently.summary.toLowerCase(),
}

setInfo(newInfo)

app.get('/api', async (req, res, next) => {
  console.log('/api')
  const api_key = process.env.API_KEY
  const api_key_cooper = process.env.COOPER_API_TOKEN

  console.log(req.params)
  const term = req.params.term
  console.log(term)

  try {
    const response = await axios.get(
      `https://www.brooklynmuseum.org/api/v2/artist?name=warhol`,
      // `https://www.brooklynmuseum.org/api/v2/collection/?folder=contemporary_art`,
      // `https://www.brooklynmuseum.org/api/v2/collection/?folder=contemporary_art`,
      // `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=2019`,
      {
        headers: { api_key: api_key },
      }
    )
    res.json(response)

    //   async getFishAndChips() {
    //     const fish = await fetch(this.fishApiUrl).then(response => response.json());
    //     this.fish = fish;

    //     const fishIds = fish.map(fish => fish.id),
    //       chipReqOpts = { method: 'POST', body: JSON.stringify({ fishIds }) };

    //     const chips = await fetch(this.chipsApiUrl, chipReqOpts).then(response => response.json());
    //     this.chips = chips;
    // }

    // console.log('in backend, response.data', response.data)
    // const artistId = response.data.data[0].id
    // axios.get(
    //   `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=artistId`
    // )

    // response.data.find(artist => artist.name === 'Ali Ashraf')
    // console.log(artist)
  } catch (error) {}
})

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
