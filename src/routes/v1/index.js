const router = require('express').Router()
const peopleRouter = require('./peopleRouter')
const vehicleRouter = require('./vehicleRouter')

router.use(vehicleRouter)
router.use(peopleRouter)

module.exports = router
