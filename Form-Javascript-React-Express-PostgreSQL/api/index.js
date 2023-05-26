require('dotenv').config()
const server = require('./src/server')
const database = require('./config/database')

const { PORT } = process.env

database.sync({ alter: true })
  .then(() => {
    console.info('synchronized database')
    server.listen(PORT, () => {
      console.info(`online server on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.info(error.message)
  })
