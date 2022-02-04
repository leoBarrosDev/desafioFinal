const router = require('express').Router();

const VehicleController = require('../../api/controllers/vehicleController');

const vehicleFilds = require('../../api/validations/vehicle/vehicleFilds');
const list = require('../../api/validations/vehicle/listVehicles');
const isId = require('../../api/validations/isId');

router
	.post('/car', vehicleFilds, VehicleController.create)
	.get('/car', list, VehicleController.list)
	.put('/car/:id', isId, vehicleFilds, VehicleController.update)
	.get('/car/:id', isId, VehicleController.findOne)
	.delete('/car/:id', isId, VehicleController.remove);

module.exports = router;
