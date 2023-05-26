require('dotenv').config()
const { HTTP_NOT_ACCEPTABLE, HTTP_CREATED } = process.env

const postGenre = async (req, res) => {
  try {
    res.status(HTTP_CREATED).send({
      code: Number(HTTP_CREATED),
      data: 'Data from the post'
    })
  } catch (error) {
    res.status(HTTP_NOT_ACCEPTABLE).send({
      code: Number(HTTP_NOT_ACCEPTABLE),
      error: error.message
    })
  }
}

module.exports = {
  postGenre
}
