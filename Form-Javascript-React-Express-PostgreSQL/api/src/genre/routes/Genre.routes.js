const { Router } = require('express')

const genreController = require('../controllers/Genre.controller')

const router = Router()

router.get('/', genreController.postGenre)

module.exports = router
