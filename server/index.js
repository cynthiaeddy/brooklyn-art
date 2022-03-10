require('dotenv').config()
const path = require('path')
const express = require('express')
const axios = require('axios')
const PORT = process.env.PORT || 3005
const app = express()

app.use(express.static(path.join(__dirname, '../client/build')))

app.get(`/api/:term`, async (req, res, next) => {
  const api_key = process.env.API_KEY
  const term = req.params.term

  await axios
    .get(`https://www.brooklynmuseum.org/api/v2/artist?name=${term}`, {
      headers: { api_key: api_key },
    })
    .then(response => {
      if (response.data.data.length) {
        const artistId = response.data.data[0].id
        return axios
          .get(
            `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
            {
              headers: { api_key: api_key },
            }
          )
          .then(response => {
            const promises = response.data.data.map(obj =>
              axios
                .get(
                  `https://www.brooklynmuseum.org/api/v2/object/${obj.id}/image`,
                  {
                    headers: { api_key: api_key },
                  }
                )
                .then(({ data }) => data)
            )
            return Promise.all(promises).then(values => {
              res.json(values)
            })
          })
      } else {
        console.log('nope')
        res.json('0 results found')
      }
    })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/client/build/index.html'))
})
app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

// res.sendFile(path.resolve(__dirname + '/app/client/build/index.html'))
