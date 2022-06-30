const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      res.status(500).send('BACKEND ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const order = req.body
  db.addClass(order)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('BACKEND ERROR: ' + err.message)
    })
})

module.exports = router
