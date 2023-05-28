const { Router } = require('express')

const genreController = require('../controllers/Genre.controller')

const router = Router()

router.post('/', genreController.postGenre)

router.get('/', genreController.getGenres)

module.exports = router
