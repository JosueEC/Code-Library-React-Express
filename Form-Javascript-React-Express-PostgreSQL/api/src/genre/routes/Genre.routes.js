const { Router } = require('express')

const { checkOrigin } = require('../../middlewares/origin')

const genreController = require('../controllers/Genre.controller')

const router = Router()

router.post('/', checkOrigin, genreController.postGenre)

router.get('/', genreController.getGenres)

module.exports = router
