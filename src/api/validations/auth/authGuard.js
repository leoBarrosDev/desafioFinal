const tokenValidator = require('../../utils/tokenValidator');

// eslint-disable-next-line consistent-return
module.exports = function authGuard(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('unauthorized');
  }

  const [bearer, token] = authorization.split(' ');

  if (bearer.toLowerCase() !== 'bearer') {
    return res.status(401).send('invalid token type');
  }

  if (!token) {
    return res.status(401).send('unauthorized');
  }

  try {
    const payload = tokenValidator(token);
    req.id = payload.params.id;

    next();
  } catch (error) {
    return res.status(401).send(`unauthorized: ${error.message}`);
  }
};
