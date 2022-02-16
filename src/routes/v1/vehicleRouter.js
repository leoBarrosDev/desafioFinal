const router = require('express').Router();

const VehicleController = require('../../api/controllers/vehicleController');
const authGuard = require('../../api/validations/auth/authGuard');

const vehicleFildValidator = require('../../api/validations/vehicle/vehicleFildValidator');
const vehicleListingValidator = require('../../api/validations/vehicle/vehicleListingValidator');
const idValidator = require('../../api/validations/idValidator');

router
	.post('/car', authGuard, vehicleFildValidator, VehicleController.createVehicle)
	.get('/car', authGuard, vehicleListingValidator, VehicleController.listVehicle)
	.put('/car/:id', authGuard, idValidator, vehicleFildValidator, VehicleController.updateVehicle)
	.get('/car/:id', authGuard, idValidator, VehicleController.findOneVehicle)
	.delete('/car/:id', authGuard, idValidator, VehicleController.removeVehicle)
	.patch('/car/:id/acessorios/:acessorioId', authGuard, VehicleController.updateAccessoryVehicle)

module.exports = router;
