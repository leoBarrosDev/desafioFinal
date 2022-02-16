const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
function tokenGenerator(params = {}) {
	return jwt.sign({ params }, authConfig.secret, {
		expiresIn: '24h'
	});
}

function tokenValidator(token) {
	return jwt.verify(token, authConfig.secret)
}


exports.tokenValidator = tokenValidator;
module.exports = tokenGenerator;