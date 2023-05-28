require('dotenv').config()

const { HTTP_BAD_REQUEST } = process.env

const httpError = (res, error, errorCode) => {
  console.info(error)
  if (!errorCode) {
    res.status(HTTP_BAD_REQUEST).send({
      code: Number(HTTP_BAD_REQUEST),
      message: error.message
    })
  }
  res.status(errorCode).send({
    code: Number(errorCode),
    message: error.message
  })
}

module.exports = { httpError }
