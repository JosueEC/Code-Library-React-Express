const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Genre Router')
})

module.exports = router
