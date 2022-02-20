const RentalController = require('../../api/controllers/rentalController');
const router = require('express').Router();

router
  .post('/rental', RentalController.createRental)
  .get('/rental', RentalController.listRental)
  .put('/rental/:id', RentalController.updateRental)
  .get('/rental/:id', RentalController.findOneRental)
  .delete('/rental/:id', RentalController.removeRental);

module.exports = router;
