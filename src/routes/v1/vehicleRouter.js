const router = require('express').Router();

const VehicleController = require('../../api/controllers/vehicleController');
const authGuard = require('../../api/validations/auth/authGuard');

const vehicleFilds = require('../../api/validations/vehicle/vehicleFilds');
const list = require('../../api/validations/vehicle/listVehicles');
const isId = require('../../api/validations/isId');

router
	.post('/car', authGuard, vehicleFilds, VehicleController.create)
	.get('/car', authGuard, list, VehicleController.list)
	.put('/car/:id', authGuard, isId, vehicleFilds, VehicleController.update)
	.get('/car/:id', authGuard, isId, VehicleController.findOne)
	.delete('/car/:id', authGuard, isId, VehicleController.remove)
	.patch('/car/:id/acessorios/acessorioId', authGuard, VehicleController.updateAccessory)

module.exports = router;
