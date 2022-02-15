const RentalController = require('../../api/controllers/rentalController');
const authGuard = require('../../api/validations/auth/authGuard');
const router = require('express').Router()

router
	.post('/rental', authGuard, RentalController.create )
	.get('/rental', authGuard, RentalController.list)
	.put('/rental/:id', authGuard, RentalController.update)
	.get('/rental/:id', authGuard, RentalController.findOne)
	.delete('/rental/:id', authGuard, RentalController.remove);

module.exports = router;


