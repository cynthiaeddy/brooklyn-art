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
      //   `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=${process.env.COOPER_API_TOKEN}&has_images=1&per_page=300&name=landis`
      // )
      //api.collection.cooperhewitt.org/rest/?method=cooperhewitt.people.getObjects&access_token=7ade63e51c3bd07d702f97aa93b5559b&person_id=34624697'

      `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.people.getObjects&access_token=${process.env.COOPER_API_TOKEN}&person=Kandinsky&role=Artist`
    )

    // console.log('in backend, response.data', response.data)
    https: res.json(response.data)
  } catch (error) {}
})
app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
