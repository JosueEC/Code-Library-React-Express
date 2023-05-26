const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const genreRouter = require('./genre/routes/Genre.routes')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.get('/', (req, res) => {
  res.status(200).send('Online Server')
})

server.use('/genre', genreRouter)

module.exports = server
