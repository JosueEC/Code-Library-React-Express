const { Router } = require('express')

const { checkOrigin } = require('../../middlewares/origin')
const { validateCreate } = require('../validators/createGenre.validator')

const genreController = require('../controllers/Genre.controller')

const router = Router()

router.post('/', checkOrigin, validateCreate, genreController.postGenre)

router.get('/', genreController.getGenres)

module.exports = router
