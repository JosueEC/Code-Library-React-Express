require('dotenv').config()
const { HTTP_UNAUTHORIZED } = process.env

const checkOrigin = (req, res, next) => {
  const userToken = req.headers.authorization.split(' ').pop()

  if (userToken === '123') {
    next()
  } else {
    res.status(HTTP_UNAUTHORIZED).send({
      code: Number(HTTP_UNAUTHORIZED),
      error: 'unauthorized user'
    })
  }
}

module.exports = {
  checkOrigin
}
