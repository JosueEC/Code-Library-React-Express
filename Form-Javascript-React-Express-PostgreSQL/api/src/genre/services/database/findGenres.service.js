const { genre } = require('../../../../config/database')

const findGenres = async () => {
  const genres = await genre.findAll()

  return genres
}

module.exports = {
  findGenres
}
