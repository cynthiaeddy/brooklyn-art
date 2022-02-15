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
    // const artistId = res.json(response.data.data[0].id)
    // response = await axios.get(
    //   `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
    //   {
    //     headers: { api_key: api_key },
    //   }
    // )

    res.json(response.data)
  } catch (error) {}
})

// //
//   try {
//     const response = axios.get(
//       `https://www.brooklynmuseum.org/api/v2/artist?name=${term}`,

//       {
//         headers: { api_key: api_key },
//       }
//         .then(response => {
//           console.log('User Login is ', response.data)
//           const artistId = response.data.data[0].id

//           axios.get(`https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
//             {
//               headers: { api_key: api_key },
//             }
//               .then(data => console.log(data))
//       })
//       .catch(err => console.log("err 2"))
//     )
// axios.get("https://api.github.com/users/sudarshansb143")
// .then(response => {
//     console.log("User Login is ", response.data.login)
//     console.log("calling second one\n ")
//     //next call
//     axios.get("https://api.github.com/users/sudarshansb143")
//         .then(data => console.log("\n success \n"))
//   }

// })
// For scenario where input of next promise is dependent on output of previous promise, we must use separate await / then() blocks

// (async () => {
//   try {
//       const axios = require("axios")
//       let response = await axios.get("https://api.github.com/users/sudarshansb143")
//       console.log("user login is ", response.data.login)
//   } catch (error) {
//       console.log("error ", error.message)
//   }
// })()

// app.get(`/api:artistId`, async (req, res, next) => {
//   const api_key = process.env.API_KEY
//   const artistId = req.params.term

//   try {
//     const response = await axios.get(
//       `https://www.brooklynmuseum.org/api/v2/object?has_images=1&artist_id=${artistId}`,
//       {
//         headers: { api_key: api_key },
//       }
//     )

//     res.json(response.data)
//   } catch (error) {}
// })

app.enable('trust proxy')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
