const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function validateToken(token) {
  return jwt.verify(token, authConfig.secret);
}

module.exports = validateToken;
