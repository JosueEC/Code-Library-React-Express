const { Router } = require('express')

const videogameController = require('../controllers/videogame.controller')

const { validateCreate } = require('../validators/createVideogame.validator')

const router = Router()

router.post('/', validateCreate, videogameController.saveVideogame)

// TODO: Create the getVideogame handler and linked it with this endpoint
router.get('/', (req, res) => {
  res.status(200).send({
    code: 200,
    data: 'endpoint get videogames'
  })
})

module.exports = router
