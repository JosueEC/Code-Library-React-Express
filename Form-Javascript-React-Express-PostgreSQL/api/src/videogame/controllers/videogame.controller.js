require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_CREATED } = process.env

const { httpError } = require('../../helpers/helperError')

const saveVideogame = async (req, res) => {
  try {
    res.status(HTTP_BAD_REQUEST).send({
      code: Number(HTTP_CREATED),
      data: 'game created'
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  saveVideogame
}
