const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
function generateToken(params = {}) {
	return jwt.sign({ params }, authConfig.secret, {
		expiresIn: '24h'
	});
}

function validateToken(token) {
	return jwt.verify(token, authConfig.secret)
}


exports.validateToken = validateToken;
module.exports = generateToken;