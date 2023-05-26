const server = require('./src/server')
const database = require('./config/database')

const { SERVER } = require('./constants')

database.sync({ alter: true })
  .then(() => {
    console.info('synchronized database')
    server.listen(SERVER.PORT, () => {
      console.info(`online server on port ${SERVER.PORT}`)
    })
  })
  .catch((error) => {
    console.info(error.message)
  })
