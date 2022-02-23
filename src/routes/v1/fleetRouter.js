const router = require('express').Router();

const FleetController = require('../../api/controllers/fleetController');

router
  .post('/rental/:id/fleet', FleetController.createFleet)
  .get('/rental/:id/fleet', FleetController.listFleet)
  .put('/rental/fleet/:id', FleetController.updateFleet)
  .get('/rental/fleet/:id', FleetController.findOneFleet)
  .delete('/rental/fleet/:id', FleetController.removeFleet);

module.exports = router;
