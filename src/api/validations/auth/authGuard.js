const validateToken = require('../../utils/validateToken')


module.exports = function authGuard(req, res, next) {

    const authorization = req.headers['authorization']

    if (!authorization) {
        return res.status(401).send('unauthorized')
    }

    const [bearer, token] = authorization.split(' ')

    if(bearer.toLowerCase() !== 'bearer'){
        return res.status(401).send('invalid token type')
    }

    if (!token) {
        return res.status(401).send('unauthorized')
    }


    try {

        const payload = validateToken(token)
        req.id = payload.params.id

        next()
    } catch (error) {
        return res.status(401).send(`unauthorized: ${error.message}`)
    }



}