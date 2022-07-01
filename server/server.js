const express = require('express')
const path = require('path')
const request = require ('superagent')

const classes = require('./routes/classes')
const orders = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/classes', classes)
server.use('/api/v1/orders', orders)

server.get('/api/v1/affirmation', async (req,res) =>{
  try{
    const response = await request.get('https://affirmations.dev')
    res.json(response.body)
  }catch(error){
    console.log(error.message)
    res.sendStatus(500)
  }
})

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
