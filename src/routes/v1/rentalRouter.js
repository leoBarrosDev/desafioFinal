const RentalController = require('../../api/controllers/rentalController');
const authGuard = require('../../api/validations/auth/authGuard')
const router = require('express').Router();

router.use('../../api/validations/auth/authGuard', authGuard);

router
	.post('/rental', RentalController.create )
	.get('/rental', RentalController.list)
	.put('/rental/:id', RentalController.update)
	.get('/rental/:id', RentalController.findOne)
	.delete('/rental/:id', RentalController.remove);

module.exports = router;


