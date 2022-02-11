const express = require('express')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 3005

const app = express()

app.get('/api:term', async (req, res, next) => {
  console.log('/api:term')
  const api_key = process.env.API_KEY
  console.log(req.params)
  const term = req.params.term
  console.log(term)

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${term}&apiKey=${api_key}`
    )
    res.json(response.data)
  } catch (error) {}
})

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
