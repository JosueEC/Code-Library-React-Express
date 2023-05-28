const { genre } = require('../../../../config/database')

const createGenre = async (name) => {
  const createdGenre = await genre.create({
    name
  })

  return createdGenre
}

module.exports = {
  createGenre
}
