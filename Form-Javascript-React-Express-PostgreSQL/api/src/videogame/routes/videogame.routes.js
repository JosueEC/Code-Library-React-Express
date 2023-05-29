const { Router } = require('express')

const videogameController = require('../controllers/videogame.controller')

const router = Router()

router.post('/', videogameController.saveVideogame)

module.exports = router
