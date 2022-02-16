const RentalController = require('../../api/controllers/rentalController');
const authGuard = require('../../api/validations/auth/authGuard');
const router = require('express').Router()

router
	.post('/rental', authGuard, RentalController.createRental )
	.get('/rental', authGuard, RentalController.listRental)
	.put('/rental/:id', authGuard, RentalController.updateRental)
	.get('/rental/:id', authGuard, RentalController.findOneRental)
	.delete('/rental/:id', authGuard, RentalController.removeRental);

module.exports = router;


