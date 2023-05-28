const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const genreRouter = require('./genre/routes/genre.routes')
const platformRouter = require('./platform/routes/platform.routes')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.get('/', (req, res) => {
  res.status(200).send('Online Server')
})

server.use('/genre', genreRouter)

server.use('/platform', platformRouter)

module.exports = server
