require('dotenv').config()
const { HTTP_CREATED } = process.env

const { httpError } = require('../helpers/helperError')

const postGenre = async (req, res) => {
  try {
    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: 'Data from the post'
    })
  } catch (error) {
    httpError(res, error)
  }
}

module.exports = {
  postGenre
}
