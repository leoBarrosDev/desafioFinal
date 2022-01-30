const router = require('express').Router()
const VehicleController = require('../../api/controllers/vehicleController')

router
  .post('/car', VehicleController.create)
  .get('/car', VehicleController.list)

module.exports = router
