const postGenre = async (req, res) => {
  try {
    res.status(302).send({ status: 'CREATED', data: 'Data from the post' })
  } catch (error) {
    res.status(406).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  postGenre
}
