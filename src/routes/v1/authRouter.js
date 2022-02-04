const router = require('express').Router();

const AuthenticateController = require('../../api/controllers/authController');
const authIsValid = require('../../api/validations/auth/authIsValid');


router
	.post('/authenticate', authIsValid, AuthenticateController.authenticate);

module.exports = router;


