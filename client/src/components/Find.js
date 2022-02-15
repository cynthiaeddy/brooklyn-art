// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()

// ==================================
// Express
// Henceforth, express is now app
// ==================================
const express = require('express')
const app = express()

const logger = require('morgan')

// ==================================
// Axios - npm package promise based HTTP client
// ==================================
const axios = require('axios')

// ==================================
// Redis - npm package for cacheing
// ==================================
var redis = require('redis'),
  client = require('redis').createClient(process.env.REDIS_URI)

// ==================================
// CORS
// npm package to allow cross origin resource sharing
// ==================================
const cors = require('cors')
app.use(cors())

// ==================================
// Body-parser captures data coming via a form.
// (Allows forms to work)
// ==================================
const bodyParser = require('body-parser')

// ==================================
// Set the port
// either from an environmental variable or manually
// ==================================
const port = process.env.PORT || 8888

// **********************************
// index route
// **********************************
app.get('/', (req, res, next) => {
  res.send(`Hello world, let's steal some art.`)
})

// **********************************
// Get All - Search by Tag word user chooses
// Redis caching taking place
// **********************************
const getItemBySearchTag = (req, res) => {
  let { value } = req.params
  let url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=${process.env.COOPER_API_TOKEN}&has_images=1&per_page=200&tag=${value}`

  return axios
    .get(url)

    .then(response => {
      console.log(
        `I have`,
        response.data.objects.length,
        `items for the keyword`,
        value,
        `.`
      )
      // SETEX is a redis command. It has 3 parameters: "key, seconds, value"
      // 1) key: Set the string-key:value in the cache.
      // 2) seconds: Set set key to timeout after a given number of seconds (cache expiration).
      // Currently set it for about 2 months....the data wont change much in 2 months.
      // 3) value: The response as JSON
      client.setex(
        req.params.value,
        60 * 60 * 24 * 7 * 8,
        JSON.stringify(response.data)
      )

      return res.json(response.data)
    })
    .catch(error => {
      console.log(error)
      res.send(`I cant' find any items right now.`)
    })
}

const getCache = (req, res) => {
  //  Check to see if there's already cached data(thank you redis)
  //  If there is, return the result.
  //  If not, then go get the data by hitting the cooper hewitt API
  client.get(req.params.value, (err, result) => {
    if (result) {
      res.send(result)
      console.log(
        `I have that search value in my redis cache, I've sent you the result.`
      )
    } else {
      getItemBySearchTag(req, res)
      console.log(
        `This search term insn't in my cache yet. Let me work on finding the result.`
      )
    }
  })
}

app.get('/searchbytag/:value', getCache)

// ==================================
// Error Handlers
// ==================================
app.use((err, req, res, next) => {
  res.json(err)
  res.status(500).send('Oh no a 500 error.')
})

app.use((req, res, next) => {
  res.status(404).send(`Oh no a 404 error. I can't find that.`)
})

// ==================================
// Body-parser
// npm package Parse incoming request bodies
// through forms
// ==================================
app.use(bodyParser.json())

// ==================================
// Port
// ==================================
app
  .listen(port, () => {
    console.log(
      `Let's steal some art! Listening on port: ${port}, in ${app.get(
        'env'
      )} mode.`
    )
  })
  .on('error', console.error)

module.exports = app
