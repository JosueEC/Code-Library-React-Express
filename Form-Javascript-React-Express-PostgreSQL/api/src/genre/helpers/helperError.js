require('dotenv').config()

const { HTTP_INTERNAL_SERVER_ERROR } = process.env

const httpError = (res, error) => {
  console.info(error)
  res.status(HTTP_INTERNAL_SERVER_ERROR).send({
    code: Number(HTTP_INTERNAL_SERVER_ERROR),
    message: error.message
  })
}

module.exports = { httpError }
