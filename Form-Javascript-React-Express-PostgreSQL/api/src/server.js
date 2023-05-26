const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.get('/', (req, res) => {
  res.status(200).send('Servidor Online')
})

module.exports = server
