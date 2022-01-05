const express = require('express')
const router = express.Router()
const got = require('got')

/* POST a create to the thing. */
router.post('/', async (req, res, next) => {

  try {
    // check body for JSON
    JSON.stringify(req.body)
    const createBody = req.body

    const createOptions = {
      json: createBody,
      headers: {
        'user-agent': 'Tiny-Node',
        'Authorization': `Bearer ${process.env.access_token}` // not required for query
      }
    }
    const queryURL = `${process.env.RERUM_URL}${process.env.CREATE}`
    const result = await got.post(queryURL, createOptions)
      .then((saved) => {
        res.setHeader("Location", saved.headers["location"])
      })
    res.status(201)
    res.send(result)
  }
  catch (err) {
    console.log(err)
    res.status(500).send("Caught Error:" + err)
  }
})

module.exports = router
