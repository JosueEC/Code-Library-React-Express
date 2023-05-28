require('dotenv').config()
const { httpError } = require('../../helpers/helperError')

const { HTTP_BAD_REQUEST, HTTP_CREATED } = process.env

const postPlatform = async (req, res) => {
  try {
    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: 'platform created'
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  postPlatform
}
