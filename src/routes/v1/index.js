const router = require('express').Router();
const authRouter = require('./authRouter');
const peopleRouter = require('./peopleRouter');
const vehicleRouter = require('./vehicleRouter');
const rentalRouter = require('./rentalRouter');
const swaggerRouter = require('./swaggerRouter');

router.use(vehicleRouter);
router.use(peopleRouter);
router.use(authRouter);
router.use(rentalRouter);
router.use(swaggerRouter);

module.exports = router;
