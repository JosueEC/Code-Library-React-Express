const server = require('./src/server')
const database = require('./src/database')

database.sync({ alter: true })
  .then(() => {
    console.info('synchronized database')
    server.listen('3001', () => {
      console.info('online server on port 3001')
    })
  })
  .catch((error) => {
    console.info(error.message)
  })
