require('dotenv').config()
const { HTTP_CREATED } = process.env

const { httpError } = require('../helpers/helperError')

const { createGenre } = require('../services/database/createGenre.service')

const postGenre = async (req, res) => {
  try {
    const { name } = req.body

    const newGenre = await createGenre(name)

    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: newGenre
    })
  } catch (error) {
    httpError(res, error)
  }
}

module.exports = {
  postGenre
}
