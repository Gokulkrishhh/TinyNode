const express = require('express')
const router = express.Router()
const got = require('got')

/* DELETE a delete to the thing. */
router.delete('/:id', async (req, res, next) => {

  try {
    const deleteBody = {'@id':`${process.env.RERUM_URL.replace('/api/','/id/')}${req.params.id}`}

    const deleteOptions = {
      json: deleteBody,
      headers: {
        'user-agent': 'Tiny-Node',
        'Authorization': `Bearer ${process.env.access_token}`
      }
    }
    console.log(deleteBody)
    console.log(JSON.stringify(deleteBody))
    const queryURL = `${process.env.RERUM_URL}${process.env.DELETE}`
    const result = await got.delete(queryURL, deleteOptions).text()
    res.status(204)
    res.send(result)
  }
  catch (err) {
    console.log(err)
    res.status(500).send("Caught Error:" + err)
  }
})

module.exports = router
