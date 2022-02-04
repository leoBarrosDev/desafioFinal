const router = require('express').Router();
const authRouter = require('./authRouter');
const peopleRouter = require('./peopleRouter');
const vehicleRouter = require('./vehicleRouter');

router.use(vehicleRouter);
router.use(peopleRouter);
router.use(authRouter);

module.exports = router;
