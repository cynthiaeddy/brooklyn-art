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
app.route('/test').get((req, res) => {
  axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka') //This will not be hardcoded, but grabbed as a parameter from the endpoint
    .then(function (response) {
      const promises = response.data.drinks.map(drink =>
        axios
          .get(getCocktailDetailsUrl + drink.idDrink)
          .then(({ data }) => data)
      )

      //I was hoping Promise.All to execute all of the requests in the promise and response to be stored in the cocktailDetails variable
      return Promise.all(promises).then(values => {
        res.send(values) // shouldn't you be using res.json() here?
      }) //if an error is thrown for any reason here, it will be caught by your outer catch
    })
    .catch(function (error) {
      res.send('There was an iswsue with your request to the cocktaildb API.')
      console.log(
        'The following is the error from the request to the cocktaildb API: ' +
          error
      )
    })
})

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
