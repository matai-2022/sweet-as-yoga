const express = require('express')
const path = require('path')

const classes = require('./routes/classes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/classes', classes)

module.exports = server
