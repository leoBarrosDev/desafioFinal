const router = require('express').Router();
const VehicleController = require('../../api/controllers/vehicleController');

router
	.post('/car', VehicleController.create)
	.get('/car', VehicleController.list)
	.put('/car/:id', VehicleController.update)
	.get('/car/:id', VehicleController.findOne)
	.delete('/car/:id', VehicleController.remove);

module.exports = router;
