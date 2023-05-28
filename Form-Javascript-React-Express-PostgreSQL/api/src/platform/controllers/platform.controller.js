require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_CREATED } = process.env

const { httpError } = require('../../helpers/helperError')

const { createPlatform } = require('../services/database/createPlatform.service')

const postPlatform = async (req, res) => {
  try {
    const { name } = req.body

    const newPlatform = await createPlatform(name)

    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: newPlatform
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  postPlatform
}
