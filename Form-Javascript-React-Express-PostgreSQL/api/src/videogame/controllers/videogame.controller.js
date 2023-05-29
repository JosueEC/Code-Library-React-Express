require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_CREATED } = process.env

const { httpError } = require('../../helpers/helperError')

const { createVideogame } = require('../services/database/createVideogame.service')

const saveVideogame = async (req, res) => {
  try {
    const { name, description, image, released, platforms, genres } = req.body

    const newVideogame = await createVideogame({ name, description, image, released, platforms, genres })

    res.status(HTTP_BAD_REQUEST).send({
      code: Number(HTTP_CREATED),
      data: newVideogame
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  saveVideogame
}
