require('dotenv').config()
const { Router } = require('express')
const fs = require('fs')

const { HTTP_NOT_FOUND } = process.env

const router = Router()
const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

// eslint-disable-next-line array-callback-return
fs.readdirSync(pathRouter).filter((file) => {
  const fileWithoutExt = removeExtension(file)
  const skip = ['index'].includes(fileWithoutExt)

  if (!skip) {
    router.use(`${fileWithoutExt}`, require(`./${fileWithoutExt}.routes`))
    console.log('CARGAR RUTA---> ', fileWithoutExt)
  }
})

router.get('*', (req, res) => {
  res.status(HTTP_NOT_FOUND).send({
    code: Number(HTTP_NOT_FOUND),
    message: 'Not Found'
  })
})

module.exports = router
