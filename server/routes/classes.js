const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.listClasses()
    .then((classes) => {
      res.json(classes)
      return null
    })
    .catch((err) => {
      res.status(500).send('BACKEND ERROR: ' + err.message)
    })
})

module.exports = router
